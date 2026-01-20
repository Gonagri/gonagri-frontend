import { useMutation } from "@tanstack/react-query";
import { apiClient } from "./client";

export interface WaitlistPayload {
  email: string;
}

export interface WaitlistResponseData {
  id: number;
  email: string;
  created_at: string;
}

export interface WaitlistResponse {
  success: boolean;
  data: WaitlistResponseData;
}

const subscribeToWaitlist = async (payload: WaitlistPayload) => {
  const { data } = await apiClient.post<WaitlistResponse>("/v1/waitlist/", payload);
  return data;
};

export const useSubscribeToWaitlist = () =>
  useMutation({
    mutationFn: subscribeToWaitlist,
  });