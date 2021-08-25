import React from "react";

const NavItem = ({ name }) => {
  return (
    <p className="cursor-pointer hover:outline hidden lg:inline-flex">{name}</p>
  );
};

export default NavItem;
