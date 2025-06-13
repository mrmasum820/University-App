import { MdOutlineCategory } from "react-icons/md";
import { MenuTypeProps } from "./types/menu.type";

export const exams: MenuTypeProps = {
  title: "Exams",
  path: "#",
  icon: MdOutlineCategory,
  children: [
    {
      title: "Exams List",
      path: "/exams",
    },
    {
      title: "Exam Types",
      path: "/exams/types",
    },
    {
      title: "Marks",
      path: "/exams/marks",
    },
    {
      title: "Grades",
      path: "/exams/grades",
    },
    {
      title: "Attendance",
      path: "/exams/attendance",
    },
    {
      title: "Schedule",
      path: "/exams/schedule",
    },
  ],
};
