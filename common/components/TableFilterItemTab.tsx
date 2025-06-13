"use client";
import { useQueryParams } from "@/hooks";
import { cn } from "@/uikit";
type TableFilterItemProps = {
  tabs?: { name: string; param: string; count: number }[];
  tableData?: {
    darft: number;
    trashed: number;
    total: number;
  };
};
export function TableFilterItemTab({ tableData }: TableFilterItemProps) {
  const { getParam, updateParam } = useQueryParams();
  const activeTab = getParam("status") || "all";
  const tabs = [
    { name: "All", param: "", count: tableData?.total || 0 },
    { name: "Draft", param: "draft", count: tableData?.darft || 0 },
    { name: "Trash", param: "trash", count: tableData?.trashed || 0 },
  ];

  return (
    <div className="flex space-x-4 font-semibold text-gray-500 my-6">
      {tabs.map((tab, index) => {
        return (
          <div key={tab.name} className="flex items-center space-x-4">
            <button
              key={tab?.name}
              onClick={() => updateParam("status", tab?.param)}
              className={cn(
                "flex items-center space-x-1 transition-colors duration-150 cursor-pointer",
                tab?.param.includes(activeTab)
                  ? "text-black font-semibold"
                  : "text-gray-400 font-semibold"
              )}
            >
              <span>{tab?.name}</span>
              <span>({tab?.count})</span>
            </button>
            {index < tabs.length - 1 && (
              <div className="h-5 w-0.5 bg-gray-300"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
