"use client";

import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Full width) */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;