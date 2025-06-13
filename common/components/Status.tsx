import { cn } from "@/uikit";

type StatusProps = {
  status: string;
};

function getStatusLabel(status: string): string {
  switch (status) {
    case "active":
      return "Active";
    case "inactive":
      return "Inactive";
    case "pending":
      return "Pending";
    case "suspended":
      return "Suspended";
    case "deleted":
      return "Deleted";
    case "archived":
      return "Archived";
    case "approved":
      return "Approved";
    case "rejected":
      return "Rejected";
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "on-hold":
      return "On Hold";
    default:
      return status;
  }
}

function getStatusColor(status: string): string {
  switch (status) {
    case "active":
      return "bg-green-600 text-white";
    case "approved":
      return "bg-green-600 text-white";
    case "completed":
      return "bg-green-600 text-white";
    case "pending":
    case "in-progress":
      return "bg-yellow-500 text-black";
    case "inactive":
      return "bg-yellow-500 text-black";
    case "archived":
    case "on-hold":
      return "bg-gray-500 text-white";
    case "rejected":
    case "deleted":
    case "suspended":
      return "bg-red-600 text-white";
    default:
      return "bg-blue-500 text-white";
  }
}

export default function Status({ status }: StatusProps) {
  const label = getStatusLabel(status);
  const colorClass = getStatusColor(status?.toLowerCase());

  return (
    <div>
      <span className={cn("px-3 py-2 text-sm font-medium rounded", colorClass)}>
        {label}
      </span>
    </div>
  );
}
