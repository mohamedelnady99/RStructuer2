/* eslint-disable @typescript-eslint/no-explicit-any */
import { notify } from "../utils/notify";
import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";
interface ApiRequestOptions {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

export const apiRequest = async ({
  url,
  method,
  body,
  headers = {},
  params = {},
}: ApiRequestOptions) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body,
      headers,
      params,
    });
    // notify(response?.data?.message, "success");
    return response.data;
  } catch (error: any) {
if (error?.response?.status === 401) {
      Cookies.remove("token");
      window.location.href = "/login";
      return;
    }
    notify(error?.response?.data?.message, "error");
    throw error?.response?.data || "An error occurred";
  }
};
