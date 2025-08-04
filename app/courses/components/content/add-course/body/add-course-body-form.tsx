import { Form, useNavigate } from "@remix-run/react";
import { Calendar } from "lucide-react";
import { SubmitBtn } from "~/components/forms";
import { SelectField, TextField, TimePicker } from "~/components/forms/fields";
import { SecondaryBtn } from "~/components/ui";

export const AddCourseBodyForm = () => {
  const navigate = useNavigate();

  return (
    <Form className="flex flex-col gap-6 w-full h-fit">
      {/* Course Information */}
      <TextField
        id="courseName"
        name="courseName"
        label="Nama Kursus"
        placeholder="contoh : Matematika Dasar"
      />
      <TextField
        id="semester"
        name="semester"
        label="Semester"
        placeholder="Masukkan semester"
      />
      <TextField
        id="description"
        name="description"
        label="Deskripsi"
        placeholder="Masukkan deskripsi"
      />

      {/* Course Schedule */}
      <div className="pt-4 flex flex-row items-center gap-2 border-t border-border dark:border-border-dark animate">
        <Calendar className="w-6 h-6 text-primary-accent dark:text-primary-accent-dark animate" />

        <h6 className="font-medium text-lg text-primary-text dark:text-primary-text-dark animate">
          Jadwal
        </h6>
      </div>

      <SelectField
        id="day"
        name="day"
        label="Hari"
        options={[
          { label: "Pilih hari", value: "" },
          { label: "Senin", value: "Monday" },
          { label: "Selasa", value: "Tuesday" },
          { label: "Rabu", value: "Wednesday" },
        ]}
      />
      <div className="flex flex-row gap-6 w-full h-fit">
        <TimePicker id="startTime" name="startTime" label="Waktu Mulai" />
        <TimePicker id="endTime" name="endTime" label="Waktu Selesai" />
      </div>

      {/* Form Button */}
      <div className="pt-6 flex flex-row items-center gap-3 border-t border-border dark:border-border-dark animate">
        <SubmitBtn label="Simpan" />
        <SecondaryBtn label="Batal" onClick={() => navigate(-1)} />
      </div>
    </Form>
  );
};
