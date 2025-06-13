import React from "react";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";

interface AppImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const AppImage: React.FC<AppImageProps> = ({
  src,
  alt = "Image",
  width = 100,
  height = 100,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-gray-200 ${className}`}
      style={{ width, height }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-auto rounded-lg"
        />
      ) : (
        <CiImageOn
          className="text-gray-500"
          size={Math.min(width, height) * 0.7}
        />
      )}
    </div>
  );
};

export default AppImage;
