"use client";
import { FC } from "react";

interface TextButtonTwoProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const TextButtonTwo: FC<TextButtonTwoProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={`text-blue-500 ${className}`}>
      {text}
    </button>
  );
};

export default TextButtonTwo;
