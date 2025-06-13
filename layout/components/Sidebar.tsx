"use client";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { MenuList } from "../navItem";
import { type MenuTypeProps } from "../navItem/types/menu.type";
import DropdownNav from "./dropdown-nav";
import SingleNav from "./single-nav";

export default function Sidebar() {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const pathname = usePathname();
  useEffect(() => {
    const newState: Record<string, boolean> = {};
    MenuList.forEach((item) => {
      if (
        item.children &&
        item.children.some((child) => pathname.startsWith(child.path))
      ) {
        newState[item.title] = true;
      }
    });
    setOpenDropdowns(newState);
  }, [pathname]);
  const toggleDropdown = (key: string): void => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (path: string): boolean => pathname === path;

  const isSubActive = (children?: MenuTypeProps[]): boolean => {
    return children
      ? children.some((item) => pathname.startsWith(item.path))
      : false;
  };

  return (
    <ul className="flex flex-col px-2 w-[250px]">
      {MenuList?.map((item) => {
        const hasChildren = !!item.children;
        const isOpen = openDropdowns[item.title];
        return (
          <Fragment key={item.title}>
            <SingleNav
              item={item}
              hasChildren={hasChildren}
              isActive={isActive}
              isSubActive={isSubActive}
              toggleDropdown={toggleDropdown}
              isOpen={isOpen}
            />
            {hasChildren && isOpen && (
              <DropdownNav item={item} isActive={isActive} />
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
