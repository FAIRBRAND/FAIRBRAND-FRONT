import React from 'react';
import SectionHeader from './SectionHeader';
import StepCard from './StepCard';
import ActionButton from './ActionButton';
import ImageWithRoundedCorner from './ImageWithRoundedCorner';

interface Step {
    number: string;
    title: string;
    description: string;
}

interface StepsSectionProps {
    title: string;
    subtitle: string;
    buttonLabel: string;
    onButtonClick?: () => void;
    imageSrc: string;
    imageAlt: string;
    steps: Step[];
}

const StepsSection: React.FC<StepsSectionProps> = ({
    title,
    subtitle,
    buttonLabel,
    onButtonClick,
    imageSrc,
    imageAlt,
    steps,
}) => (
    <section className="flex flex-col md:flex-row items-stretch gap-8 max-w-6xl mx-auto py-12 px-4">
        {/* Image */}
        <div className="flex-1 flex items-end">
            <ImageWithRoundedCorner src={imageSrc} alt={imageAlt} className="rounded-3xl h-[420px] object-cover shadow-xl" />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center gap-8">
            {/* Header bulle */}
            <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl mb-4 w-full relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{title}</h2>
                <p className="text-lg md:text-2xl font-medium mb-6">{subtitle}</p>
                <ActionButton label={buttonLabel} onClick={onButtonClick} />
            </div>
            {/* Steps bulle */}
            <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl flex flex-col gap-6 w-full relative z-0">
                {steps.map((step) => (
                    <StepCard
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default StepsSection; 