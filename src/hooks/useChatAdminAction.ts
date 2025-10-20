import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";

export function useAdminActions(mode: "normal" | "admin") {
    const [debugInfo, setDebugInfo] = useState<unknown>(null);
    const [ingestText, setIngestText] = useState("");
    const [contextName, setContextName] = useState("");
    const [fileToIngest, setFileToIngest] = useState<File | null>(null);
    const [ingestDirPath, setIngestDirPath] = useState("");
    const [ingestGlob, setIngestGlob] = useState("**/*");

    useEffect(() => {
        if (mode === "admin") fetchDebugInfo().then(() => {});
    }, [mode]);

    const fetchDebugInfo = async () => {
        try {
            const response = await axiosInstance.get("/rag/debug");
            setDebugInfo(response.data);
        } catch (error) {
            console.error("Error fetching debug info:", error);
            setDebugInfo({ error: "Could not fetch debug info" });
        }
    };

    const handleIngestFile = async () => {
        if (!fileToIngest || mode !== "admin") return;
        const formData = new FormData();
        formData.append("file", fileToIngest);
        try {
            await axiosInstance.post("/rag/ingest_file", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert(`File "${fileToIngest.name}" ingested successfully!`);
            setFileToIngest(null);
            fetchDebugInfo();
        } catch (error: unknown) {
            alert(`Error ingesting file: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };

    const handleIngest = async () => {
        if (!ingestText.trim() || mode !== "admin") return;
        try {
            await axiosInstance.post("/rag/ingest", {
                texts: [ingestText],
                metadata: [{ source: "admin-ingest" }],
            });
            setIngestText("");
            alert("Text ingested successfully!");
            fetchDebugInfo();
        } catch (error: unknown) {
            alert(`Error ingesting text: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };

    const handleIngestFiles = async () => {
        if (!ingestDirPath.trim() || mode !== "admin") return;
        try {
            await axiosInstance.post("/rag/ingest_dir", {
                dir_path: ingestDirPath,
                glob_pattern: ingestGlob,
                recursive: true,
            });
            setIngestDirPath("");
            setIngestGlob("**/*");
            alert("Files ingested successfully!");
            fetchDebugInfo();
        } catch (error: unknown) {
            alert(`Error ingesting files: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };

    const handleRebuild = async () => {
        if (mode !== "admin") return;
        try {
            await axiosInstance.post("/rag/rebuild", { reset_faiss: false });
            alert("Index rebuilt successfully!");
            fetchDebugInfo();
        } catch (error: unknown) {
            alert(`Error rebuilding index: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };

    const handleDeleteContext = async () => {
        if (!contextName.trim() || mode !== "admin") return;
        try {
            await axiosInstance.delete(`/rag/context/${contextName}`);
            alert(`Context "${contextName}" deleted successfully!`);
            setContextName("");
            fetchDebugInfo();
        } catch (error: unknown) {
            alert(`Error deleting context: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };

    const handleDeleteAllContexts = async () => {
        if (mode !== "admin") return;
        try {
            await axiosInstance.delete("/rag/contexts");
            alert("All contexts deleted successfully!");
            fetchDebugInfo();
        } catch (error: unknown) {
            alert(`Error deleting all contexts: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };

    return {
        debugInfo,
        ingestText,
        setIngestText,
        contextName,
        setContextName,
        fileToIngest,
        setFileToIngest,
        ingestDirPath,
        setIngestDirPath,
        ingestGlob,
        setIngestGlob,
        handleIngestFile,
        handleIngest,
        handleIngestFiles,
        handleRebuild,
        handleDeleteContext,
        handleDeleteAllContexts,
    };
}
