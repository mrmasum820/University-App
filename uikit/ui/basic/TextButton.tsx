"use client";
import { FC } from "react";

interface TextButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const TextButton: FC<TextButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-blue-500 hover:underline ${className}`}
    >
      {text}
    </button>
  );
};

export default TextButton;
