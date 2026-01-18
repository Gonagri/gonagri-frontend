import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ApiErrorBody {
  success?: boolean;
  error?: {
    code?: string;
    message?: string;
  };
  message?: string;
}

