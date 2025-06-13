import AppCard from "@/uikit/ui/basic/AppCard";
import AppImage from "@/uikit/ui/basic/AppImage";
import React from "react";
import { FiPlus } from "react-icons/fi";

const PhotoGallery = () => {
  return (
    <div className="mt-4">
      <AppCard title="Photo Gallery">
        <div className="my-4 mx-2">
          <div className="grid grid-cols-3 gap-2">
            <AppImage width={100} height={100} className="mx-auto" />
            <AppImage width={100} height={100} className="mx-auto" />

            <FiPlus
              size={30}
              className="bg-gray-300 text-gray-400 rounded-md w-[100] h-[100] p-2 cursor-pointer"
            />
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default PhotoGallery;
