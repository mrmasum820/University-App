import Link from "next/link";
import { type MenuTypeProps } from "../navItem/types/menu.type";

type DropdownNavProps = {
  item: MenuTypeProps;
  isActive: (path: string) => boolean;
};

export default function DropdownNav({ item, isActive }: DropdownNavProps) {
  return (
    <li key={item.title} className="relative mt-2">
      <div className="ml-4 mt-2 space-y-1 border-l border-gray-200 pl-4">
        {item.children!.map((child) => (
          <Link
            key={child.path}
            href={child.path}
            className={`block px-2 py-2 rounded hover:bg-gray-100 ${
              isActive(child.path) ? "bg-gray-200 font-medium" : ""
            }`}
          >
            {child.title}
          </Link>
        ))}
      </div>
    </li>
  );
}
