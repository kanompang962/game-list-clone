import React, { useContext, useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiSun, HiMoon, HiMagnifyingGlass } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  //   console.log("them start: ", theme);
  return (
    <div className="flex items-center p-3">
      <img
        className={`${theme ? "" : "transition-colors"}`}
        src={logo}
        width={100}
        height={100}
      />
      <div
        className="
        bg-slate-200
        flex
        w-full
        p-2
        items-center
        rounded-full
        mx-5
        gap-2"
      >
        <HiMagnifyingGlass />
        <input
          className="bg-transparent outline-none"
          type="text"
          placeholder="Search Games"
        />
      </div>
      <div className="hover:cursor-pointer">
        {theme == "dark" ? (
          <HiSun
            className="text-[35px] bg-slate-200 rounded-full p-1"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        ) : (
          <HiMoon
            className="text-[35px] bg-slate-200 rounded-full p-1"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
