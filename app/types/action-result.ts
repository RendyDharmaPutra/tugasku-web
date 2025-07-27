import type { ZodFormattedError } from "zod";

export interface Action {
  success: boolean;
  message: string;
}

export interface ActionSuccess<T> extends Action {
  success: true;
  data: T;
}

export interface ActionFailure<E = string | ZodFormattedError<unknown>>
  extends Action {
  success: false;
  error: E;
}

export type ActionResult<T, E = string | ZodFormattedError<unknown>> =
  | ActionSuccess<T>
  | ActionFailure<E>;
