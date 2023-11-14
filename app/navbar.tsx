"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
interface NavItems {
  title: string;
  href: string;
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [darkMode]);
  const navItems: NavItems[] = [
    {
      title: "about",
      href: "#about",
    },

    {
      title: "skills",
      href: "#skills",
    },
    {
      title: "portfolio",
      href: "#portfolio",
    },
    {
      title: "certification",
      href: "#certification",
    },
    {
      title: "contact",
      href: "#contact",
    },
  ];
  return (
    <div className="h-[64px] w-full sticky left-0 top-0 z-50 bg-white dark:bg-gradient-to-r dark:from-[#232526] dark:to-[#414345] transition-colors">
      <div className=" flex items-center h-full">
        <div className="ml-5">
          <a href={"#hero"}>
            <h1 className="text-4xl text-secondary dark:text-primary font-normal font-shadow cursor-default hover:scale-105 transition-all duration-300">
              AW
            </h1>
          </a>
        </div>
        <div className="flex w-full h-full justify-end items-center text-secondary dark:text-primary text-lg gap-10 mr-12 transition-colors">
          {navItems.map((item, key) => {
            return (
              <div
                key={key}
                className="h-full flex items-center group z-0 relative"
              >
                <a href={item.href}>
                  <span className="absolute bottom-0 left-0 w-0 h-1 z-10 group-hover:w-full group-hover:h-1 bg-secondary transitiion-all duration-500"></span>
                  <p className="capitalize dark:group-hover:text-white group-hover:text-secondary/60 transition-colors duration-300">
                    {item.title}
                  </p>
                </a>
              </div>
            );
          })}
          <div className="flex items-center gap-2">
            <div
              className={`${
                !darkMode ? "text-orange-600" : "text-gray-400"
              } transition-colors duration-500`}
            >
              <BsFillSunFill />
            </div>
            <button
              className={`w-12 h-6 border-2 ${
                darkMode ? "bg-gray-600" : "bg-gray-500"
              } rounded-full border-secondary relative transition-all duration-500 outline-none`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`relative h-4 w-4 ${
                  darkMode ? "ml-6 bg-secondary" : "ml-[6px] bg-white"
                }  rounded-full  transition-all duration-700`}
              ></div>
            </button>
            <div
              className={`${
                darkMode ? "text-yellow-300" : "text-gray-400"
              } transition-colors duration-500`}
            >
              <BsFillMoonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
