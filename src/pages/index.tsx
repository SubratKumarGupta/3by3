import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { T3TBoard } from "../components/board";
import { Selector } from "../components/selector";
import { DndContext } from "@dnd-kit/core";

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>3x3</title>
        <meta name="3x3" content="create a 3x3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="
        h-[100vh]
        w-[100vw]
       items-center 
       justify-center"
      >
        <div className="grid h-[100%] w-[100%] grid-cols-[70%,30%] grid-rows-[85%] items-center justify-items-center bg-teal-200">
          <T3TBoard name="jojo" />
          <Selector name="ANIME" />
        </div>

        {/* <div className="flex w-full items-center justify-center pt-2 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>

        <AuthShowcase /> */}
      </main>
    </>
  );
};

export default Home;
