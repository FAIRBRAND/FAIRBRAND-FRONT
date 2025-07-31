import React from 'react';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
    <div className="flex items-center gap-6 w-full">
        <div className="flex-shrink-0 bg-black text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg shadow-md">
            {number}
        </div>
        <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg sm:text-xl mb-1 break-words">{title}</h3>
            <p className="text-sm sm:text-base opacity-90 break-words">{description}</p>
        </div>
    </div>
);

export default StepCard; 