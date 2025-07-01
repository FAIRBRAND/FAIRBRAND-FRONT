import React from 'react';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
    <div className="flex items-center gap-6">
        <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">
            {number}
        </div>
        <div>
            <h3 className="font-bold text-xl mb-1">{title}</h3>
            <p className="text-base opacity-90">{description}</p>
        </div>
    </div>
);

export default StepCard; 