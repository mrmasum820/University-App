"use client";

import React from "react";
import InstitutionLogo from "./InstitutionLogo";
import InstitutionBanner from "./InstitutionBanner";
import Publish from "./Publish";
import PhotoGallery from "./PhotoGallery";
import Video from "./Video";

const RightSide = () => {
  return (
    <div>
      {/* publish */}
      <Publish />

      {/* intitution logo */}
      <InstitutionLogo />

      {/* intitution banner */}
      <InstitutionBanner />

      <PhotoGallery />

      <Video />
    </div>
  );
};

export default RightSide;
