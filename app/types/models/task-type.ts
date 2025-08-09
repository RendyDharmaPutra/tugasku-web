export type TaskType = {
  title: string;
  description?: string;
  link?: string;
  deadline: string;
  status: "Selesai" | "Belum Selesai";
};
