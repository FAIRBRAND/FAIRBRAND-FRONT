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
    <section className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Image */}
        <div className="flex-1">
            <ImageWithRoundedCorner src={imageSrc} alt={imageAlt} />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
            <SectionHeader title={title} subtitle={subtitle} />
            <ActionButton label={buttonLabel} onClick={onButtonClick} />
            <div className="mt-8">
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