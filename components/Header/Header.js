import React from "react";
import Image from "next/image";
import Logo from "./TopNav/Logo";
import Search from "./TopNav/Search";
import RightSection from "./TopNav/RightSection";
import BottomNav from "./BottomNav/BottomNav";
const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-[#131921] p-1 flex-grow py-2">
        <Logo />
        <Search />
        <RightSection />
      </div>
      <BottomNav />
    </header>
  );
};
export default Header;
