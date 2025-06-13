"use client";
import { Card, Grid } from "@/uikit/ui";
import DataTable from "@/uikit/ui/basic/DataTable";
import TextButton from "@/uikit/ui/basic/TextButton";

interface EnglishData {
  id: number;
  course_name: string;
  duration: string;
  tution_fee: string;
}

const EnglishTestScore = () => {
  const columns = [
    { key: "id", label: "ID", hidden: true },
    { key: "course_name", label: "Course Name" },
    { key: "duration", label: "Duration" },
    { key: "tution_fee", label: "Tution Fee" },
  ] as { key: keyof EnglishData; label: string }[];

  const data: EnglishData[] = [
    {
      id: 1,
      course_name: "Bachelor (Honours) Biology with Phychology",
      duration: "3 years",
      tution_fee: "From $25,782",
    },
    {
      id: 2,
      course_name: "BSc (Hons) in Actuarial Studies",
      duration: "3 years",
      tution_fee: "From $24,448",
    },
    {
      id: 3,
      course_name: "Bachelor (Honours) in Biomedicine",
      duration: "3 years",
      tution_fee: "From $28,327",
    },
    {
      id: 4,
      course_name: "Bachelor (Honours) in Industrial Economics",
      duration: "3 years",
      tution_fee: "From $24,448",
    },
  ];

  const handleRowClick = (row: EnglishData, index: number) => {
    alert(`Row ${index + 1} clicked! Name: ${row.course_name}`);
  };

  return (
    <Grid.Col className="col-span-12 mt-4">
      <Card>
        <Card.Header title="Bachelor's Degree > Bachelor in Accounting & Finance > Applied, Pure Sciences" />
        <DataTable columns={columns} data={data} onRowClick={handleRowClick} />
        <div className="border-t border-gray-200 p-2">
          <TextButton
            className="text-sm cursor-pointer font-semibold"
            text="+ Add Course"
            onClick={() => {}}
          />
        </div>
      </Card>
    </Grid.Col>
  );
};

export default EnglishTestScore;
