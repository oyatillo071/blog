import React, { useEffect, useState } from "react";
import ThemeProvider from "./ThemeProvider";
import { NavLink } from "react-router-dom";
import { ExitIcon } from "@radix-ui/react-icons";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("user") ? true : false;
    setIsLogin(loginStatus);
  }, []);

  return (
    <header className="flex items-center sticky flex-wrap-reverse sm:flex-nowrap gap-3 top-0 z-50 bg-white justify-between py-4 px-6  w-full dark:bg-gray-800 shadow-md">
      <nav className="flex gap-6 container mx-auto flex-wrap-reverse">
        <NavLink
          to="/"
          className={` dark:text-gray-300 font-mono hover:text-indigo-500 `}
        >
          Articles
        </NavLink>
        {isLogin ? (
          <div className="flex items-center sm:gap-20 gap-5 flex-wrap-reverse">
            <NavLink
              to="/articles/create"
              className={` dark:text-gray-300 font-mono hover:text-indigo-500`}
            >
              Create Article
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => {
                localStorage.setItem("user");
              }}
              className={`flex items-center gap-2 dark:text-gray-300 font-mono hover:text-indigo-500 
              `}
            >
              <ExitIcon />
              Exit
            </NavLink>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={` dark:text-gray-300 font-mono hover:text-indigo-500 
              `}
          >
            Login
          </NavLink>
        )}
      </nav>
      <ThemeProvider />
    </header>
  );
}

export default Header;
