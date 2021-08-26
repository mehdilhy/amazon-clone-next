import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);
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
            <h1 className="text-3xl border-b pb-4">
              {" "}
              {items.length === 0 ? "Your Basket is empty." : "Your Basket : "}
            </h1>
            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
