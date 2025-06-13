import AppCard from "@/uikit/ui/basic/AppCard";
import AppImage from "@/uikit/ui/basic/AppImage";
import TextButton from "@/uikit/ui/basic/TextButton";
import React from "react";

const InstitutionLogo = () => {
  return (
    <div className="mt-4">
      <AppCard title="Institution Logo">
        <div className="my-4 mx-2">
          <div>
            <AppImage width={150} height={150} className="mx-auto" />
            <p className="text-sm text-gray-300 text-center mt-1">
              Image size 1000*1000
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

export default InstitutionLogo;
