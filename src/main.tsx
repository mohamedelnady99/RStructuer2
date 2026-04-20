import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/store.ts";
import { ToastContainer } from "react-toastify";
import queryClient from "./Hooks/QueryClients.ts";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <ToastContainer position="top-right" autoClose={5000} />
        <App />
      </StrictMode>
    </QueryClientProvider>
  </ReduxProvider>,
);
