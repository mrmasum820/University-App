import { FC } from "react";

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  borderColor?: string;
  outlineWidth?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  hoverColor,
  borderColor,
  outlineWidth,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${bgColor} ${textColor} ${hoverColor} ${borderColor} ${outlineWidth} py-1 rounded cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
