import { MdOutlineSubject } from "react-icons/md";
import { MenuTypeProps } from "./types/menu.type";

export const institute: MenuTypeProps = {
  title: "Institute",
  path: "#",
  icon: MdOutlineSubject,
  children: [
    {
      title: "Institute List",
      path: "/institute",
    },
  ],
};
