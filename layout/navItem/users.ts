import { MenuTypeProps } from "./types/menu.type";
import { FaUserFriends } from "react-icons/fa";

export const users: MenuTypeProps = {
  title: "Users Management",
  path: "#",
  icon: FaUserFriends,
  children: [
    {
      title: "Users",
      path: "/user-management/users",
      onClick: () => {},
    },
    {
      title: "Roles",
      path: "/user-management/roles",
      onClick: () => {},
    },
    // {
    //     title: "Permissions",
    //     path: "/user-management/permissions",
    //     onClick: () => {},
    // }
  ],
};
