import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800 transition duration-200">
      <Head>
        <title>Starter Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Text className="dark:text-white text-6xl text-center">
        Starter template <br></br>
        Firebase/Redux/TailwindCss/Chakra
      </Text>
    </div>
  );
}
