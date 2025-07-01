import React from 'react';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full justify-center">
        <div className="flex-shrink-0 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md mb-2 sm:mb-0">
            {number}
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-1">{title}</h3>
            <p className="text-base opacity-90 break-words">{description}</p>
        </div>
    </div>
);

export default StepCard; 