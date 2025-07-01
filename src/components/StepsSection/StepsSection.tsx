import React from 'react';
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
    <section className="w-full flex flex-col lg:flex-row items-stretch justify-center max-w-7xl mx-auto py-12 px-2 md:px-8 gap-8">
        {/* Image à gauche */}
        <div className="flex-1 flex items-end min-h-[480px]">
            <ImageWithRoundedCorner src={imageSrc} alt={imageAlt} className="rounded-3xl w-full h-[480px] object-cover shadow-2xl" />
        </div>
        {/* Contenu à droite */}
        <div className="flex-1 flex flex-col justify-center gap-8 relative z-10">
            {/* Bulle principale titre/slogan/bouton */}
            <div className="bg-[#3C3C8C] text-white rounded-[2.5rem] px-8 py-10 shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12 mb-6">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 md:mb-0">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-col items-start md:items-end gap-4 flex-1">
                    <p className="text-lg md:text-2xl font-medium mb-2 md:mb-0 text-white/90 text-right">
                        {subtitle}
                    </p>
                    <ActionButton label={buttonLabel} onClick={onButtonClick} />
                </div>
            </div>
            {/* Steps en bulles séparées */}
            <div className="flex flex-col gap-6">
                {steps.map((step) => (
                    <div key={step.number} className="bg-[#3C3C8C] text-white rounded-[2.5rem] px-8 py-6 shadow-xl flex items-center">
                        <StepCard
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StepsSection; 