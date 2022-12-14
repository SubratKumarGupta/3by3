import { NextPage } from "next";
import Head from "next/head";

export const Costom404 = () => {
  return (
    <main
      className=" h-[100vh]
      w-[100vw]
      items-center
     justify-center 
     overflow-hidden bg-black
     "
    >
      <div className="my-auto mt-auto flex h-full w-full items-center justify-center bg-black pt-2 text-7xl text-white">
        404 | This page could not be found.
      </div>
    </main>
  );
};
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>3x3</title>
        <meta name="3x3" content="create a 3x3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Costom404 />
    </>
  );
};

export default Page;
