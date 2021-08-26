import { MenuIcon } from "@heroicons/react/outline";
import React from "react";
import NavItem from "./NavItemResponsive";
const navItems = [
  "Electronics",
  "Food & Grocery",
  "Prime",
  "Buy Again",
  "Shopper Toolkit",
  "Health & Personal Care",
];
const BottomNav = () => {
  return (
    <div className="flex items-center space-x-3 p-2 pl-6 bg-[#232F3E] text-white text-sm">
      <p className="cursor-pointer hover:outline flex items-center">
        <MenuIcon className="h-6 mr-1" />
        All
      </p>
      <p className="cursor-pointer hover:outline whitespace-nowrap flex items-center">
        Prime Video
      </p>
      <p className="cursor-pointer hover:outline whitespace-nowrap ">
        Amazon Business
      </p>
      <p className="cursor-pointer hover:outline whitespace-nowrap">
        Today's Deals
      </p>
      {navItems.map((item, i) => (
        <NavItem name={item} key={i} />
      ))}
    </div>
  );
};

export default BottomNav;
