import React from "react";
import useDarkMode from "../../useDarkMode";
import { CgMoon, CgSun } from "react-icons/cg";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
const NightModeButton = () => {
  const [isDark, setIsDark] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className=" bg-white  rounded-full hidden sm:inline-flex md:inline-flex lg:flex transition duration-200 ease-in transform bottom-1 ">
      {isDark ? (
        <Button
          onClick={() => {
            setTheme("light");
            setIsDark(false);
          }}
          borderRadius="lg"
          width="10px"
          height="20px"
        >
          <CgMoon className="h-[100%] w-[100%]" />
        </Button>
      ) : (
        <Button
          onClick={() => {
            setTheme("dark");
            setIsDark(true);
          }}
        >
          <CgSun className="h-[100%] w-[100%]" />
        </Button>
      )}
    </div>
  );
};

export default NightModeButton;
