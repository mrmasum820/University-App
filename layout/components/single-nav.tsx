import Link from "next/link";
// import { usePathname } from "next/navigation";
import { CgChevronDown } from "react-icons/cg";
import { type MenuTypeProps } from "../navItem/types/menu.type";

type SingleNavProps = {
  item: MenuTypeProps;
  hasChildren: boolean;
  isActive: (path: string) => boolean;
  isSubActive: (children?: MenuTypeProps[]) => boolean;
  toggleDropdown: (key: string) => void;
  isOpen: boolean;
};

export default function SingleNav({
  item,
  hasChildren,
  isActive,
  isSubActive,
  toggleDropdown,
  isOpen,
}: SingleNavProps) {
  // const pathname = usePathname();
  return (
    <li key={item.title} className="relative mt-2">
      <Link
        href={item.path}
        onClick={() => (hasChildren ? toggleDropdown(item.title) : null)}
        className={`w-full text-left flex items-center justify-between px-4 py-2 rounded hover:bg-gray-100 ${
          isActive(item.path) || isSubActive(item.children)
            ? "bg-gray-200 font-medium"
            : ""
        }`}
      >
        <div className="flex items-center gap-3">
          {item.icon && <item.icon size={20} />}
          <span>{item.title}</span>
        </div>
        {hasChildren && (
          <CgChevronDown
            className={`w-4 h-4 transform transition-transform duration-200 text-gray-400 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>
    </li>
  );
}
