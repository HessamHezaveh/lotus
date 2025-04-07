import React from "react";

interface TitleCardProps {
  title: string;
  description?: string;
  fullText?: string;
  className?: string;
  titleClassName?: string; // Optional custom class for the title
  textClassName?: string; // Optional custom class for description and fullText
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  description,
  fullText,
  className = "",
  titleClassName = "",
  textClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col py-5 items-center gap-2 md:gap-6 ${className}`}
    >
      {/* Title */}
      <h2
        className={`text-center text-mh-gold text-2xl md:text-4xl font-black ${titleClassName}`}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`text-center text-base sm:text-lg font-normal text-zinc-800 md:font-medium ${textClassName}`}
        >
          {description}
        </p>
      )}

      {/* Full Text */}
      {fullText && (
        <p
          className={`text-center text-base sm:text-lg font-normal text-zinc-800 ${textClassName}`}
        >
          {fullText}
        </p>
      )}
    </div>
  );
};

export default TitleCard;