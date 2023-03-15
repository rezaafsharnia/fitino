import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { AiOutlineUser } from "react-icons/ai";
const menu = [
  {
    head: "صفحه اصلی",
    hover: false,
    address: "/",
    submenu: null,
  },
  {
    head: "ماشین حساب سلامتی",
    hover: false,
    address: "/calculator",
    submenu: [
      {
        title: "ماشین حساب توده بدن",
      },

      {
        title: "ماشین حساب درصد چربی",
      },
    ],
  },
];

function Navigation() {
  const [nav, setNav] = useState(menu);
  const hoverHandler = (head) => {
    const items = [...nav];
    const finded = items.find((i) => i.head == head);
    finded.hover = !finded.hover;
    setNav(items);
  };
  const hoverOutHandler = (head) => {
    const items = [...nav];
    const finded = items.find((i) => i.head == head);
    finded.hover = !finded.hover;
    setNav(items);
  };
  // console.log(nav);
  return (
    <header className="sticky top-0 z-10 py-2 shadow-md bg-white/30 flex justify-between backdrop-filter backdrop-blur-lg items-center border-b border-gray-200 py-2 px-4">
      <nav className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-8">
          <Link className="ml-8">
            <img src={logo} alt="logo-header" width={100} />
          </Link>
          <div className="md:flex hidden gap-8">
            {menu.map((item) => {
              return (
                <div key={item.head}>
                  <NavLink
                    onMouseOut={() => hoverOutHandler(item.head)}
                    onMouseOver={() => hoverHandler(item.head)}
                    to={item.address}
                    className="hover:text-green-400 duration-300 transition"
                  >
                    {item.head}
                  </NavLink>
                  {item.hover && item.submenu && (
                    <div className="min-w-[400px] bg-white shadow-xl min-h-[200px] absolute mt-4 rounded-2xl py-4 px-4 ">
                      {item.submenu.map((sbm) => {
                        return (
                          <div key={sbm.title} className="flex justify-center">
                            <div className="text-sm">{sbm.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Link
          to="/login"
          className="border border-gray-300 py-2 px-4 rounded-xl duration-300 transition hover:border-green-400 hover:text-green-400 flex justify-between items-center gap-2"
        >
          ورود / ثبت نام
          <AiOutlineUser />
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
