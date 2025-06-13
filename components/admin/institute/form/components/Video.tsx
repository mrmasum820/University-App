import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";
import { CiVideoOn } from "react-icons/ci";

const Video = () => {
  return (
    <div className="mt-4">
      <AppCard title="Video">
        <div className="my-4 mx-2">
          <div>
            <TextField placeholder="YouTube" className="mb-4" />

            <CiVideoOn
              size={30}
              className="bg-gray-300 text-gray-400 rounded-md w-full h-[150] p-2 cursor-pointer"
            />
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default Video;
