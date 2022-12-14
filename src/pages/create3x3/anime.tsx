import type { NextPage } from "next";
import Head from "next/head";
import { DndElements } from "../../components/Dnd";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>3x3</title>
        <meta name="3x3" content="create a 3x3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className=" h-[100vh]
        w-[100vw]
        items-center
       justify-center 
       overflow-hidden bg-black
        bg-dark-gradint-1
       "
      >
        <DndElements type={"ANIME"} />
      </main>
    </>
  );
};

export default Home;
