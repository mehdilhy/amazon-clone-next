import { React, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
const MAX = 5;
const MIN = 1;
function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col bg-white m-5 z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 10} currency="MAD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            width={48}
            height={48}
            objectFit="contain"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">
            FREE Delivery if you have prime ( or star my github)
          </p>
        </div>
      )}
      <Button
        bgGradient="linear(to-b, yellow.300, yellow.400)"
        _focus={{
          outline: "none",
        }}
        fontSize="xs"
        _hover={{ bgGradient: "linear(to-b, yellow.500, yellow.300)" }}
        onClick={addItemToBasket}
      >
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
