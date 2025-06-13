import { IoSettingsOutline } from "react-icons/io5";
import { MenuTypeProps } from "./types/menu.type";

export const settings: MenuTypeProps = {
  title: "Settings",
  path: "/settings",
  icon: IoSettingsOutline,
  // children: [
  //   {
  //     title: "Department",
  //     path: "/settings/department",
  //     onClick: () => {},
  //   },
  // ],
};
