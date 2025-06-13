"use client";
import React, { useState } from "react";
import { FC } from "react";
import TextButtonTwo from "./TextButtonTwo";
import SearchTextField from "./SearchTextField";

interface ListHeaderProps {
  totalAllItems?: number;
  totalDraftItems?: number;
  totalTrashItems?: number;
  onSearchChange?: (e: string) => void;
  onAllClick?: () => void;
  onDraftClick?: () => void;
  onTrashClick?: () => void;
}

const ListHeader: FC<ListHeaderProps> = ({
  totalAllItems,
  totalDraftItems,
  totalTrashItems,
  onSearchChange,
  onAllClick,
  onDraftClick,
  onTrashClick,
}) => {
  const [selected, setSelected] = useState<number>(1);

  const handleSelect = (i: number) => {
    setSelected(i);
  };

  return (
    <div className="flex items-center justify-between">
      {/* all / draft / trash buttons */}
      <div className="flex items-center space-x-4">
        {totalAllItems && (
          <div>
            <TextButtonTwo
              text={`All (${totalAllItems})`}
              className={`${
                selected === 1 ? "text-gray-900" : "text-gray-400"
              } font-semibold cursor-pointer`}
              onClick={() => {
                handleSelect(1);
                onAllClick?.();
              }}
            />
            <span className="pl-4 text-gray-400">|</span>
          </div>
        )}

        {totalDraftItems && (
          <div>
            <TextButtonTwo
              text={`Draft (${totalDraftItems})`}
              className={`${
                selected === 2 ? "text-gray-900" : "text-gray-400"
              } font-semibold cursor-pointer`}
              onClick={() => {
                handleSelect(2);
                onDraftClick?.();
              }}
            />
            <span className="pl-4 text-gray-400">|</span>
          </div>
        )}

        {totalTrashItems && (
          <div>
            <TextButtonTwo
              text={`Trash (${totalTrashItems})`}
              className={`${
                selected === 3 ? "text-gray-900" : "text-gray-400"
              } font-semibold cursor-pointer`}
              onClick={() => {
                handleSelect(3);
                onTrashClick?.();
              }}
            />
          </div>
        )}
      </div>

      {/* search fields */}
      <div>
        <SearchTextField
          placeholder="Search"
          onSearch={onSearchChange ? onSearchChange : () => {}}
        />
      </div>
    </div>
  );
};

export default ListHeader;
