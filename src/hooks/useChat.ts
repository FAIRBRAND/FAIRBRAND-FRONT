import { useState, useEffect, useRef, useCallback } from "react";
import {axiosInstance} from "@/utils/axios";
import { debounce } from "lodash";

export interface Message {
    role: "user" | "admin" | "assistant";
    content: string;
    contexts?: string[];
}

export function useChat(mode: "normal" | "admin") {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSend = useCallback(
        debounce(async (useStream: boolean = false) => {
            if (!input.trim()) return;

            const userRole = mode === "admin" ? "admin" : "user";
            const newMessage: Message = { role: userRole, content: input };
            setMessages((prev) => [...prev, newMessage]);
            setInput("");
            setIsLoading(true);

            try {
                if (useStream) {
                    const response = await fetch(
                        `${axiosInstance.defaults.baseURL}/chat/stream`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                messages: [{ role: userRole, content: newMessage.content }],
                                model: "phi3:mini",
                                k: 2,
                                fast: true,
                                stream: true,
                                sse: true,
                            }),
                        }
                    );

                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                    const reader = response.body?.getReader();
                    if (!reader) throw new Error("No reader available for stream");

                    const assistantMessage: Message = { role: "assistant", content: "" };
                    setMessages((prev) => [...prev, assistantMessage]);

                    const decoder = new TextDecoder();
                    let fullResponse = "";
                    let contexts: string[] = [];

                    while (true) {
                        const { value, done } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value, { stream: true });
                        const lines = chunk.split("\n").filter((line) => line.trim());

                        for (let i = 0; i < lines.length; i++) {
                            const line = lines[i];

                            if (line.startsWith("event: meta")) {
                                const metaLine = lines[i + 1];
                                if (metaLine?.startsWith("data: ")) {
                                    try {
                                        const metaData = JSON.parse(metaLine.replace("data: ", ""));
                                        contexts = metaData.contexts || [];
                                    } catch (e) {
                                        console.error("Failed to parse meta data:", e);
                                    }
                                }
                                continue;
                            }

                            if (line.startsWith("data: ")) {
                                const content = line.replace("data: ", "");
                                if (content === "[DONE]") break;
                                fullResponse += content;
                                setMessages((prev) => {
                                    const updated = [...prev];
                                    updated[updated.length - 1] = {
                                        ...updated[updated.length - 1],
                                        content: fullResponse,
                                        contexts,
                                    };
                                    return updated;
                                });
                            }
                        }
                        scrollToBottom();
                    }
                } else {
                    const response = await axiosInstance.post("/chat", {
                        messages: [{ role: userRole, content: newMessage.content }],
                        model: "phi3:mini",
                        k: 2,
                        fast: true,
                        stream: false,
                    });

                    const assistantMessage: Message = {
                        role: "assistant",
                        content: response.data.response,
                        contexts: response.data.contexts || [],
                    };
                    setMessages((prev) => [...prev, assistantMessage]);
                }
            } catch (error: unknown) {
                console.error("Error sending message:", error);
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: `Error: ${error?.message || "Unknown error"}` },
                ]);
            } finally {
                setIsLoading(false);
                scrollToBottom();
            }
        }, 300),
        [input, mode, scrollToBottom]
    );

    return { messages, input, setInput, handleSend, isLoading, chatEndRef };
}
