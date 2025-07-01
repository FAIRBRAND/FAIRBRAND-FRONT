import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
    <div className="mb-8">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-xl mt-2">{subtitle}</p>
    </div>
);

export default SectionHeader; 