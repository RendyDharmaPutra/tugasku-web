/**
 * Extracts the first validation error message for each field from an action result.
 *
 * This function is useful to simplify usage of field-level error messages in forms,
 * especially when working with Zod or other validation libraries that return arrays of errors per field.
 *
 * @template T - The shape of the error object (usually field names as keys).
 * @param result - The action result object returned from a Remix action (with success and error keys).
 * @returns A flat record of error messages, where each field maps to its first error string or `undefined`.
 *
 * @example
 * const errors = extractFieldErrors<RegisterFieldErrors>(actionData);
 * console.log(errors.email); // e.g., "Email is required"
 */
export const extractFieldErrors = <T extends Record<string, unknown>>(result: {
  success: boolean;
  error?: T;
}): Record<keyof T, string | undefined> => {
  const output: Partial<Record<keyof T, string | undefined>> = {};

  // Skip if result is success or contains no error object
  if (!result || result.success || !result.error)
    return output as Record<keyof T, string | undefined>;

  // Convert each error entry into a single string (usually the first message)
  for (const key in result.error) {
    const raw = result.error[key];
    if (Array.isArray(raw)) {
      output[key] = raw[0];
    } else if (typeof raw === "string") {
      output[key] = raw;
    }
  }

  return output as Record<keyof T, string | undefined>;
};
