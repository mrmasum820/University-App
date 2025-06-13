import { FaUserShield } from "react-icons/fa";
import { MenuTypeProps } from "./types/menu.type";

export const applicants: MenuTypeProps = {
  title: "Applicants",
  path: "#",
  icon: FaUserShield,
  children: [
    {
      title: "Applicants list",
      path: "/applicants",
    },
    {
      title: "Agents",
      path: "/applicants/agents",
    },
    {
      title: "Counselor",
      path: "/applicants/counselor",
    },
    {
      title: "Lead Source",
      path: "/applicants/source",
    },
  ],
};
