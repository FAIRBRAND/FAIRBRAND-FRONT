import React from 'react';

interface ImageWithRoundedCornerProps {
    src: string;
    alt: string;
    className?: string;
}

const ImageWithRoundedCorner: React.FC<ImageWithRoundedCornerProps> = ({ src, alt, className }) => (
    <img
        src={src}
        alt={alt}
        className={`rounded-3xl w-full h-full object-cover ${className || ''}`}
    />
);

export default ImageWithRoundedCorner; 