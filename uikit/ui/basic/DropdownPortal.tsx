// File: components/DropdownPortal.tsx
import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface DropdownPortalProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  children: ReactNode;
}

export const DropdownPortal: React.FC<DropdownPortalProps> = ({ anchorRef, children }) => {
  const [position, setPosition] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (anchorRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [anchorRef]);

  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body
  );
};
