import { ActionResult } from "~/types/action-result";
import { RegisterFieldErrors } from "../schemas/register-schema";

export type RegisterActionResult = ActionResult<null, RegisterFieldErrors>;
