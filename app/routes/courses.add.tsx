import { ActionFunctionArgs, redirect } from "@remix-run/node";
import {
  AddCourseBody,
  AddCourseHeader,
} from "~/courses/components/content/add-course";
import { AddCourseSchema } from "~/courses/schemas";
import { addCourse } from "~/courses/services";
import { useActionToast } from "~/hooks";
import { FailureResult } from "~/utils/action-result";
import { validateForm } from "~/utils/validation";

export default function AddCoursePage() {
  useActionToast("Menambahkan kursus");

  return (
    <main className="p-6 flex flex-col items-center gap-8 w-full h-screen bg-primary-background dark:bg-primary-background-dark animate overflow-y-auto">
      <AddCourseHeader />
      <AddCourseBody />
    </main>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const response = new Response();
  const validationResult = validateForm(
    await request.formData(),
    AddCourseSchema
  );

  if (!validationResult.success)
    return FailureResult(
      "Data yang diberikan belum valid",
      validationResult.errors
    );

  const result = await addCourse(request, response, validationResult.data);
  console.log(result);

  return result;
}
