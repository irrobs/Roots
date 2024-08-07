import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import LoggedUserPage from "./pages/LoggedUserPage";
import UserPage from "./pages/UserPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000,
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="main" />} />
              <Route path="main" element={<MainPage />} />
              <Route path="user" element={<LoggedUserPage />} />
              <Route path="user/:id" element={<UserPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="resetPassword" element={<ResetPasswordPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
