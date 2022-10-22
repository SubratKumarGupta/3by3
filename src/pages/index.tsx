import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import T3TBoard from "../components/board";
import {
  DndContext,
  useDroppable,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

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

type SelectorCardProps = {
  id: string;
  titleEng: string;
  titleRom: string;
  isAdult: boolean;
  img: string;
  format: string;
  type: string;
};
const SelectorCard = ({ id }: SelectorCardProps) => {
  return (
    <div className=" mx-auto flex h-24 w-[85%] items-center justify-start bg-cyan-400">
      <img
        className="mr-3 aspect-[85/115] h-[100%]"
        src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127230-FlochcFsyoF4.png"
        alt="Chainshaw man"
      />
      <div>{"chainshaw"}</div>
    </div>
  );
};

type SelectorProps = {
  name: string;
};
const Selector = ({ name }: SelectorProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="row-span-2 grid h-[100vh] w-[100%] grid-flow-row grid-cols-1 grid-rows-[12%] items-start justify-center bg-zinc-800">
      <div className=" m-auto w-[90%]">
        <form className=" w-[100%]">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search anime"
              required
            />
          </div>
        </form>
      </div>
      <DndContext>
        <div className=" h-[100%] w-[100%]  pt-2">
          <SelectorCard
            id={"jojo"}
            titleEng={""}
            titleRom={""}
            format={""}
            isAdult={false}
            img={""}
            type={""}
          />
        </div>
      </DndContext>
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
