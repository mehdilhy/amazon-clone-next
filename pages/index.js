import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className=" dark:bg-[#131921] transition duration-200">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}
