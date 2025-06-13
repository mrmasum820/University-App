import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MenuTypeProps } from "./types/menu.type";

export const services: MenuTypeProps = {
  title: "Services",
  path: "#",
  icon: MdOutlineMiscellaneousServices,
  children: [
    {
      title: "Service List",
      path: "/service",
    },
    {
      title: "Service Category",
      path: "/service/service-category",
    },
    {
      title: "Service Country",
      path: "/service/service-country",
    },
  ],
};
