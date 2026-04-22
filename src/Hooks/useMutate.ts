// Updated useMutate Hook
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/ApiRequest";

// Define the types for request options and error structure
interface RequestOptions {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  method: "get" | "post" | "put" | "delete";
  headers?: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>;
}

interface ErrorResponse {
  message: Record<string, string[]>;
  status: string;
}

export const useMutate = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (options: RequestOptions) => {
      try {
        const data = await apiRequest(options);
        return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error?.status === 401) {
          Cookies.remove("token");
          navigate("/auth");
        }

        if (error.response?.data) {
          const errorData = error.response.data as ErrorResponse;
          throw errorData;
        }

        throw error;
      }
    },
  });

  return mutation;
};
