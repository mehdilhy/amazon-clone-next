import { Button, Text } from "@chakra-ui/react";
import React from "react";
import useDarkMode from "./useDarkMode";
import { CgMoon, CgSun } from "react-icons/cg";
import { useState } from "react";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="top-0 fixed pt-5 flex justify-between w-[100%]">
      <div className="flex space-x-4 pl-5">
        <Text className="text-2xl dark:text-white">Logo</Text>
        {isDark ? (
          <Button
            onClick={() => {
              setTheme("light");
              setIsDark(false);
            }}
          >
            <CgMoon />
          </Button>
        ) : (
          <Button
            onClick={() => {
              setTheme("dark");
              setIsDark(true);
            }}
          >
            <CgSun />
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
