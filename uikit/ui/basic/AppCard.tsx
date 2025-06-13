import React from "react";

interface AppCardProps {
  title?: string;
  children: React.ReactNode;
  rightButton?: React.ReactNode;
}

const AppCard: React.FC<AppCardProps> = ({ title, children, rightButton }) => {
  return (
    <div className="bg-white shadow-md rounded p-2 border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text font-semibold text-gray-800 ml-2">{title}</h2>
        {rightButton && <div>{rightButton}</div>}
      </div>
      {title && <hr className="my-2 border-gray-300" />}
      <div>{children}</div>
    </div>
  );
};

export default AppCard;
