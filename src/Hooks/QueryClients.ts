import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

// Function to handle errors globally
interface CustomError {
  message: string;
}
const handleGlobalError = (error: AxiosError<CustomError>) => {
  if (error.response?.status == 401) {
    location.href="/auth"
    console.error(
      `[Global Error]: Unauthorized access - ${error.response.status}`
    );
  } else if (error instanceof Error) {
    console.error(`[Global Error]: ${error}`);
  } else {
    console.error(`[Global Error]: An unknown error occurred`);
  }
};

// Create a QueryClient instance with default options
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown | AxiosError<CustomError>) => {
      if (error instanceof AxiosError) {
        handleGlobalError(error);
        return error;
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown | AxiosError<CustomError>) => {
      if (error instanceof AxiosError) {
        handleGlobalError(error);
        return error;
      }
    },
  }),
});

export default queryClient;
