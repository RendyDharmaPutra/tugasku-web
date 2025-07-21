import type { ZodFormattedError } from "zod";

export type ActionType = {
  success: boolean;
  message: string;
};

export type ActionSuccess<T> = ActionType & {
  success: true;
  data: T;
};

export type ActionFailure<E = string | ZodFormattedError<unknown>> =
  ActionType & {
    success: false;
    error: E;
  };

export type ActionResult<T, E = string | ZodFormattedError<unknown>> =
  | ActionSuccess<T>
  | ActionFailure<E>;
