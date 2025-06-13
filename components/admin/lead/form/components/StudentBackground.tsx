"use client";
import AppCard from "@/uikit/ui/basic/AppCard";
import DataTable from "@/uikit/ui/basic/DataTable";
import TextButton from "@/uikit/ui/basic/TextButton";

interface StudentData {
  id: number;
  title: string;
  level: string;
  institution: string;
  percentage: string;
  season: string;
}

const StudentBackground = () => {
  const columns = [
    { key: "id", label: "ID", hidden: true },
    { key: "title", label: "Degree Title" },
    { key: "level", label: "Degree Level" },
    { key: "institution", label: "Institution" },
    { key: "percentage", label: "Percentage/GPA", color: "text-blue-500" },
    { key: "season", label: "Season" },
  ] as { key: keyof StudentData; label: string }[];

  const data: StudentData[] = [
    {
      id: 1,
      title: "SSC",
      level: "High school",
      institution: "Khulna High school",
      percentage: "2.5",
      season: "1 January 2010 To 1 January 2011",
    },
    {
      id: 2,
      title: "SSC",
      level: "High school",
      institution: "Khulna High school",
      percentage: "2.5",
      season: "1 January 2010 To 1 January 2011",
    },
  ];

  const handleRowClick = (row: StudentData, index: number) => {
    alert(`Row ${index + 1} clicked! Name: ${row.title}`);
  };

  return (
    <div className="mt-4">
      <AppCard title="Student background">
        <DataTable columns={columns} data={data} onRowClick={handleRowClick} />
        <div className="border-t border-gray-200 p-2">
          <TextButton
            className="text-sm cursor-pointer font-semibold"
            text="+ Add Education"
            onClick={() => {}}
          />
        </div>
      </AppCard>
    </div>
  );
};

export default StudentBackground;
