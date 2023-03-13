import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import fitness from "../fitness.png";
function HomePage() {
  return (
    <Layout>
      <div className="h-[400px] flex justify-between items-center mt-32 py-8  mx-auto max-w-6xl">
        <div>
          <h1 className="text-7xl text-green-500 font-extrabold py-4">
            فیتینو
          </h1>
          <h2 className="text-4xl font-bold py-2">
            اولین پلتفرم جامع ثبت رژیم غذایی و ورزش
          </h2>
          <h4 className="text-2xl font-light py-2">
            اولین پلتفرم جامع رژیم و ورزش ایران
          </h4>
          <Link
            to={"/login"}
            className="bg-orange-500 mt-8 block w-1/3 py-3 px-4 flex justify-center text-white rounded-xl"
          >
            همین الان شروع کن
          </Link>
        </div>
        <img src={fitness} alt="fitness" width={180} className="object-cover" />
      </div>
    </Layout>
  );
}

export default HomePage;
