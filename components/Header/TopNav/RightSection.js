import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Center } from "@chakra-ui/react";

const RightSection = () => {
  return (
    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
      <div className="cursor-pointer hover:underline">
        <p>Hello Visitor</p>
        <p className="font-extrabold md:text-sm">Account & Lists</p>
      </div>
      <div className="cursor-pointer hover:underline">
        <p>Returns</p>
        <p className="font-extrabold md:text-sm">& Orders</p>
      </div>
      <div className="cursor-pointer hover:underline relative flex items-center">
        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold it">
          <Center>4</Center>
        </span>
        <ShoppingCartIcon className="h-10" />
        <p className="font-extrabold md:text-sm hidden md:inline mt-2">
          Basket
        </p>
      </div>
    </div>
  );
};

export default RightSection;
