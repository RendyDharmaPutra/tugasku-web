import { Form, useNavigate } from "@remix-run/react";
import { Calendar } from "lucide-react";
import { SubmitBtn } from "~/components/forms";
import {
  SelectField,
  TextAreaField,
  TextField,
  TimePicker,
} from "~/components/forms/fields";
import { SecondaryBtn } from "~/components/ui";
import { AddCourseFieldErrors } from "~/courses/schemas";
import { useFieldErrors } from "~/hooks";

export const AddCourseBodyForm = () => {
  const { name, semester, description, day, start_time, end_time } =
    useFieldErrors<AddCourseFieldErrors>();

  const navigate = useNavigate();

  return (
    <Form className="flex flex-col gap-6 w-full h-fit" method="POST">
      {/* Course Information */}
      <TextField
        id="name"
        name="name"
        label="Nama Kursus"
        placeholder="contoh : Matematika Dasar"
        message={name}
      />
      <TextField
        type="number"
        id="semester"
        name="semester"
        label="Semester"
        placeholder="Masukkan semester"
        message={semester}
      />
      <TextAreaField
        id="description"
        name="description"
        label="Deskripsi"
        placeholder="Masukkan deskripsi"
        message={description}
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
        message={day}
        options={[
          { label: "Pilih hari", value: "" },
          { label: "Senin", value: "Senin" },
          { label: "Selasa", value: "Selasa" },
          { label: "Rabu", value: "Rabu" },
          { label: "Kamis", value: "Kamis" },
          { label: "Jumat", value: "Jumat" },
          { label: "Sabtu", value: "Sabtu" },
          { label: "Minggu", value: "Minggu" },
        ]}
      />
      <div className="flex flex-row gap-6 w-full h-fit">
        <TimePicker
          id="start_time"
          name="start_time"
          label="Waktu Mulai"
          message={start_time}
        />
        <TimePicker
          id="end_time"
          name="end_time"
          label="Waktu Selesai"
          message={end_time}
        />
      </div>

      {/* Form Button */}
      <div className="pt-6 flex flex-row items-center gap-3 border-t border-border dark:border-border-dark animate">
        <SubmitBtn label="Simpan" />
        <SecondaryBtn label="Batal" onClick={() => navigate(-1)} />
      </div>
    </Form>
  );
};
