"use client";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const sideMenu = [
  "Logo",
  "Login Page",
  "Theme",
  "Mobile App",
  "Student Panel",
  "Fees",
  "ID Auto Generation",
  "Attendance Type",
  "Whatsapp Settings",
  "Maintainance",
  "Miscellaneous",
];

const LeftSidebar = () => {
  return (
    <div>
      <AppCard title="General Settings">
        <div className="my-4 mx-2">
          <div>
            {sideMenu.map((menu) => (
              <ul key={menu}>
                <li className="my-3 cursor-pointer">{menu}</li>
              </ul>
            ))}
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default LeftSidebar;
