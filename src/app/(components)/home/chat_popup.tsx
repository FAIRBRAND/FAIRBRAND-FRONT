"use client";

import { FC } from "react";
import { useChat } from "@/hooks/useChat";
import { Message } from "@/hooks/useChat";

interface ChatPopupProps {
    mode: "normal" | "admin";
    onClose: () => void;
}

const ChatPopup: FC<ChatPopupProps> = ({ mode, onClose }) => {
    const { messages, input, setInput, handleSend, isLoading, chatEndRef } = useChat(mode);

    return (
        <div className="fixed bottom-24 right-8 w-80 h-[500px] bg-neutral-900 border border-gray-700 rounded-xl shadow-2xl flex flex-col z-50">
            {/* Header */}
            <div className="flex justify-between items-center p-2 border-b border-gray-700">
                <h2 className="text-white font-bold">Chat</h2>
                <button onClick={onClose} className="text-white font-bold">✕</button>
            </div>

            {/* Chat Window */}
            <div className="flex-1 p-2 overflow-y-auto space-y-2">
                {messages.map((msg: Message, idx: number) => (
                    <div
                        key={idx}
                        className={`p-2 rounded-md ${
                            msg.role === "user" ? "bg-blue-600 text-white self-end" : "bg-gray-700 text-white self-start"
                        }`}
                    >
                        {msg.content}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-2 border-t border-gray-700 flex gap-2">
                <input
                    type="text"
                    className="flex-1 p-2 rounded-md bg-gray-800 text-white outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSend();
                    }}
                    placeholder="Écrire un message..."
                />
                <button
                    onClick={() => handleSend()}
                    className="p-2 bg-blue-600 rounded-md text-white hover:bg-blue-700"
                    disabled={isLoading}
                >
                    ➤
                </button>
            </div>
        </div>
    );
};

export default ChatPopup;
