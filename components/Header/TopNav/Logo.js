import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
function Header() {
  const router = useRouter();
  return (
    <div className="mt-2 flex items-center flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow">
      <Image
        src="https://links.papareact.com/f90"
        width={150}
        height={50}
        objectFit="contain"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
    </div>
  );
}

export default Header;
