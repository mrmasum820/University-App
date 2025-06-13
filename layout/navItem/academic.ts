import { MenuTypeProps } from "./types/menu.type";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

export const academic: MenuTypeProps = {
  title: "Academic",
  path: "#",
  icon: HiMiniBuildingLibrary,
  children: [
    {
      title: "Program",
      path: "/academic/program",
    },
    {
      title: "Program Group",
      path: "/academic/program-group",
    },
    {
      title: "Classroom",
      path: "/academic/classroom",
    },
    {
      title: "Batch",
      path: "/academic/batch",
    },
    {
      title: "Subject",
      path: "/academic/subject",
    },
    {
      title: "Enrollment",
      path: "/academic/enrollment",
    },
    {
      title: "Lecturer",
      path: "/academic/lecturer",
    },
  ],
};
