import { useMutation } from "@tanstack/react-query";
import { apiClient } from "./client";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponseData {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface ContactResponse {
  success: boolean;
  data: ContactResponseData;
}

const submitContactMessage = async (payload: ContactPayload) => {
  const { data } = await apiClient.post<ContactResponse>("/v1/contact/", payload);
  return data;
};

export const useSubmitContactMessage = () =>
  useMutation({
    mutationFn: submitContactMessage,
  });

