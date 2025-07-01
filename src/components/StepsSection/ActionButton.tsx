import React from 'react';

interface ActionButtonProps {
    label: string;
    onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => (
    <button
        className="bg-white text-primary border border-primary rounded-full px-6 py-2 font-semibold hover:bg-primary hover:text-white transition"
        onClick={onClick}
    >
        {label}
    </button>
);

export default ActionButton; 