import axios from "axios";
import React, { useEffect } from "react";
import FornConfirm from "../components/FornConfirm";

function LoginOtpPage() {
  useEffect(() => {
    axios.get("http://localhost:5000/sendOtp");
  });
  return (
    <div className="flex justify-center items-center">
      <FornConfirm />
    </div>
  );
}

export default LoginOtpPage;
