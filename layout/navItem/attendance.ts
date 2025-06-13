import { MenuTypeProps } from "./types/menu.type";
import { MdCoPresent } from "react-icons/md";

export const attendance: MenuTypeProps = {
  title: "Attendance",
  path: "#",
  icon: MdCoPresent,
  children: [
    {
      title: "Student Attendance",
      path: "/attendance",
    },
    {
      title: "Approve Leave",
      path: "/attendance/leave",
    },
  ],
};
