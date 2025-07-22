import { ActionFailure, ActionSuccess } from "~/types/action-result";

export const SuccessResult = <T>(
  message: string,
  data: T
): ActionSuccess<T> => ({
  success: true,
  message,
  data,
});

export const FailureResult = <E>(
  message: string,
  error: E
): ActionFailure<E> => ({
  success: false,
  message,
  error,
});
