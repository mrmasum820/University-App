import Swal from "sweetalert2";

export function useNotification() {
  const Toast = ({
    background,
    iconColor,
    color,
    icon,
    title,
  }: {
    background: string;
    iconColor: string;
    color: string;
    icon: "success" | "error";
    title: string;
  }) =>
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
      background,
      iconColor,
      color,
    }).fire({
      icon,
      title,
    });

  const predefinedMessages: Record<
    | "create"
    | "update"
    | "delete"
    | "create_fail"
    | "update_fail"
    | "delete_fail",
    string
  > = {
    create: "Item created successfully!",
    update: "Item updated successfully!",
    delete: "Item deleted successfully!",
    create_fail: "Item created failed!",
    update_fail: "Item updated failed!",
    delete_fail: "Item deleted failed!",
  };

  const showNotification = (
    type: "success" | "error",
    action: keyof typeof predefinedMessages
  ) => {
    const message = predefinedMessages[action] || "Action completed!";
    if (type === "success") {
      Toast({
        background: "green",
        iconColor: "white",
        color: "white",
        icon: "success",
        title: message,
      });
    } else if (type === "error") {
      Toast({
        background: "red",
        iconColor: "white",
        color: "white",
        icon: "error",
        title: message,
      });
    }
  };

  return { showNotification };
}
