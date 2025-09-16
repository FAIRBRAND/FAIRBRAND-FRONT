import Image from "next/image";
import React from "react";

interface ImageWithRoundedCornerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithRoundedCorner: React.FC<ImageWithRoundedCornerProps> = ({
  src,
  alt,
  className,
}) => (
  <Image
    src={src}
    alt={alt}
    width={600}
    height={600}
    className={`rounded-3xl w-full h-full object-cover ${className || ""}`}
  />
);

export default ImageWithRoundedCorner;
