"use client";
import { FC } from "react";
import {LiaRobotSolid} from "react-icons/lia";

interface ChatButtonProps {
    onClick: () => void;
}

const ChatButton: FC<ChatButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all"
        >
            <LiaRobotSolid size={25}/>
        </button>
    );
};

export default ChatButton;
