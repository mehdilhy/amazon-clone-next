import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import ProductFeed from "../components/Banner/ProductFeed";
import Header from "../components/Header/Header";

export default function Home({ products }) {
  return (
    <div className=" bg-gray-200 dark:bg-[#131921] transition duration-200">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
