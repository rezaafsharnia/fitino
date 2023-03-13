import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import { BsFillCalculatorFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
function UserPanelPage() {
  const location = useLocation();
  const { state } = location;
  return (
    <Layout>
      <div className="flex justify-center min-h-full">
        <div className="bg-white border-l-2 rounded-l-[2rem]  shadow-md min-w-[250px] py-4">
          <h2 className="text-center text-lg font-bold my-4 border-b-2 pb-4">{`${state.name} جان خوش آمدی!`}</h2>
          <ul className="flex flex-col justify-start items-start px-4 gap-4">
            <li className="flex justify-between items-center gap-2 w-full">
              <div className="flex justify-between gap-4">
                <BsFillCalculatorFill className="text-xl" />
                ماشین حساب سلامتی
              </div>
              <button>
                <BsChevronDown className="mr-4" />
              </button>
            </li>
            <li className="flex justify-between items-center gap-2 w-full">
              <div className="flex justify-between gap-4">
                <MdSubscriptions className="text-xl" />
                اشتراک عضویت
              </div>
              <button>
                <BsChevronDown className="mr-4" />
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-white flex-1">asdd</div>
      </div>
    </Layout>
  );
}

export default UserPanelPage;
