import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";
const Checkout = () => {
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping</h1>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
