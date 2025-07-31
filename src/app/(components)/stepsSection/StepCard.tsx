import React from 'react';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
    <div className="bg-primary rounded-2xl flex items-center p-6 mb-4">
        <div className="flex-shrink-0 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md sm:w-14 sm:h-14">
            {number}
        </div>
        <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    </div>
);

export default StepCard; 