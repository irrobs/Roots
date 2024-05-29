import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MainPage />} />
          </Route>

          <Route element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
