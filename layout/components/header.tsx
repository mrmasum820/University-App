"use client";
import { FC, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { redirect, useRouter } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative">
      <header className="bg-white shadow-md p-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-between">
            {/* <h2 className="text-xl font-semibold">Dashboard Menu</h2> */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="sm:hidden"
            >
              <FaBars size={24} />
            </button>
          </div>
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
            <h2 className="font-semibold">Oxford Asia College</h2>
          </div>
        </div>

        {/* User Profile and Logout */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            <span className="hidden sm:block">Salam, Mamun Ahmed</span>
            <FaUser size={20} />
          </button>

          {/* <button
          onClick={() => alert("Logging out...")}
          className="flex items-center space-x-2 text-red-600 hover:text-red-800"
        >
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </button> */}
        </div>
      </header>
      <div className="absolute z-10 top-18 right-1 w-48">
        {isOpen && (
          <ul className=" w-full bg-white border border-gray-300 rounded shadow">
            <li
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                router.push("/dashboard/profile");
              }}
            >
              <div className="flex items-center space-x-2">
                <CgProfile className="text-gray-600" size={24} />
                <span className="text-gray-600">{"Profile"}</span>
              </div>
            </li>
            <li
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                redirect("/");
              }}
            >
              <div className="flex items-center space-x-2">
                <CiLogout className="text-gray-600" size={24} />
                <span className="text-gray-600">{"Logout"}</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
