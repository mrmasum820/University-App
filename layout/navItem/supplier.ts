import { FaUserInjured } from "react-icons/fa";
import { MenuTypeProps } from "./types/menu.type";

export const supplier: MenuTypeProps = {
  title: "Supplier",
  path: "#",
  icon: FaUserInjured,
  children: [
    {
      title: "Suppliers",
      path: "/suppliers",
    },
    // {
    //     title: "Supplier Types",
    //     path: "/suppliers/supplier-types",
    // },
    {
      title: "Supplier Categories",
      path: "/suppliers/supplier-category",
    },
  ],
};
