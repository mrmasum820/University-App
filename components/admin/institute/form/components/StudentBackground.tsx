"use client";
import { Grid } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import DataTable from "@/uikit/ui/basic/DataTable";
import TextButton from "@/uikit/ui/basic/TextButton";

interface StudentData {
  id: number;
  course_name: string;
  duration: string;
  tution_fee: string;
}

const StudentBackground = () => {
  const columns = [
    { key: "id", label: "ID", hidden: true },
    { key: "course_name", label: "Course Name" },
    { key: "duration", label: "Duration" },
    { key: "tution_fee", label: "Tution Fee" },
  ] as { key: keyof StudentData; label: string }[];

  const data: StudentData[] = [
    {
      id: 1,
      course_name: "Bachelor (Honours) in Finance",
      duration: "3 years",
      tution_fee: "From $2325",
    },
    {
      id: 2,
      course_name: "BSc (Hons) Financial Analysis",
      duration: "1 year",
      tution_fee: "From $2356",
    },
    {
      id: 3,
      course_name: "Bachelor (Honours) in Finance",
      duration: "3 years",
      tution_fee: "From $2325",
    },
  ];

  const handleRowClick = (row: StudentData, index: number) => {
    alert(`Row ${index + 1} clicked! Name: ${row.course_name}`);
  };

  return (
    <Grid.Col className="col-span-12 mt-4">
      <AppCard title="Bachelor's Degree > Bachelor in Accounting & Finance > Accounting & Finance">
        <DataTable columns={columns} data={data} onRowClick={handleRowClick} />
        <div className="border-t border-gray-200 p-2">
          <TextButton
            className="text-sm cursor-pointer font-semibold"
            text="+ Add Education"
            onClick={() => {}}
          />
        </div>
      </AppCard>
    </Grid.Col>
  );
};

export default StudentBackground;
