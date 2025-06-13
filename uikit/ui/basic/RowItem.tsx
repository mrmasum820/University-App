import { ReactNode, useState } from "react";
import { FaPencilAlt, FaCheck } from "react-icons/fa";

type RowItemProps = {
  label: string;
  value: ReactNode;
  children?: ReactNode;
  onSave?: () => void;
};

const RowItem = ({ label, value, children, onSave }: RowItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave?.();
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex flex-col w-full">
        <span className="text-sm text-gray-500">{isEditing ? "" : label}</span>
        {isEditing ? (
          <div>{children && children}</div>
        ) : (
          <span className="text-base font-medium text-gray-900">{value}</span>
        )}
      </div>
      <button
        className=""
        onClick={isEditing ? handleSave : () => setIsEditing(true)}
      >
        {isEditing ? (
          <FaCheck className="w-5 h-5 mt-5 ml-3 text-green-600" />
        ) : (
          <FaPencilAlt className="w-4 h-4 text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default RowItem;
