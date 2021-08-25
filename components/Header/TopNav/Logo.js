import { Button, Text } from "@chakra-ui/react";
import React from "react";
import useDarkMode from "../../useDarkMode";
import Image from "next/image";
import { CgMoon, CgSun } from "react-icons/cg";
import { useState } from "react";
import NightModeButton from "./NightModeButton";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="mt-2 flex items-center flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow">
      <Image
        src="https://links.papareact.com/f90"
        width={150}
        height={50}
        objectFit="contain"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Header;
