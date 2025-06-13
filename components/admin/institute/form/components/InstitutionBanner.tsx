import AppCard from "@/uikit/ui/basic/AppCard";
import AppImage from "@/uikit/ui/basic/AppImage";
import TextButton from "@/uikit/ui/basic/TextButton";
import React from "react";

const InstitutionBanner = () => {
  return (
    <div className="mt-4">
      <AppCard title="Institution Banner">
        <div className="my-4 mx-2">
          <div>
            <AppImage width={300} height={200} className="mx-auto" />
            <p className="text-sm text-gray-300 text-center mt-1">
              Image size 1000*500
            </p>
            <div className="mt-2">
              <TextButton
                className="cursor-pointer"
                text="Upload Picture"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default InstitutionBanner;
