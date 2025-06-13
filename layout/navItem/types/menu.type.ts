import { IconType } from "react-icons";

export interface MenuTypeProps {
  title: string;
  path: string;
  icon?: IconType;
  onClick?: () => void;
  children?: MenuTypeProps[];
}
