import axios from "axios";
import React, { useEffect } from "react";
import FornConfirm from "../components/FornConfirm";
import Layout from "../layout/Layout";

function LoginOtpPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <FornConfirm />
      </div>
    </Layout>
  );
}

export default LoginOtpPage;
