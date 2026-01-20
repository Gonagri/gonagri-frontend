import type { AxiosError } from "axios";
import type { ApiErrorBody } from "./client";

export const getApiErrorMessage = (
  error: unknown,
  fallbackMessage = "Something went wrong. Please try again."
) => {
  if (error && typeof error === "object") {
    const maybeAxiosError = error as AxiosError<ApiErrorBody>;
    const data = maybeAxiosError.response?.data;

    if (data) {
      if (data.error?.message) {
        return data.error.message;
      }

      if (data.message) {
        return data.message;
      }
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallbackMessage;
};