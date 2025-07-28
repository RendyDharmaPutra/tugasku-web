import { useActionData } from "@remix-run/react";
import { ActionResult } from "~/types/action-result";
import { extractFieldErrors } from "~/utils/validation";

/**
 * Hook to extract field-level validation errors from the current Remix action data.
 *
 * Simplifies usage of error messages in form components.
 *
 * @template T - The shape of the error object (usually field names as keys).
 * @returns A record mapping field names to their first error message (or `undefined`).
 *
 * @example
 * const errors = useFieldErrors<RegisterFieldErrors>();
 * console.log(errors.email); // "Email is required"
 */
export const useFieldErrors = <T extends Record<string, unknown>>() => {
  const actionData = useActionData<ActionResult<null, T>>();
  return extractFieldErrors<T>(actionData ?? { success: true });
};
