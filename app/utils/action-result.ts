import {
  ActionFailure,
  ActionResult,
  ActionSuccess,
} from "~/types/action-result";

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

export function isActionSuccess<T>(
  action: ActionResult<T, unknown>
): action is ActionSuccess<T> {
  return action.success === true;
}

export function isActionFailure<E>(
  action: ActionResult<unknown, E>
): action is ActionFailure<E> {
  return action.success === false;
}
