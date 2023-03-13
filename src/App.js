import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import FormConfirm from "./components/FornConfirm";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LoginOtpPage from "./pages/LoginOtpPage";
import UserPanelPage from "./pages/UserPanelPage";

function App() {
  return (
    <div
      className="bg-zinc-50 min-h-screen  text-gray-600 flex justify-center"
      dir="rtl"
    >
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/login/otp"} element={<LoginOtpPage />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/user/:userName"} element={<UserPanelPage />} />
      </Routes>
    </div>
  );
}

export default App;
