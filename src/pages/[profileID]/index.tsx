import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { Profile } from "../../components/social/profilePage/profile";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>3x3</title>
        <meta name="3x3" content="create a 3x3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="
          grid   
          h-screen 
          w-screen
          grid-flow-col-dense grid-cols-[27%,45%,28%] 
          grid-rows-1
          overflow-hidden"
      >
        <Profile />
      </main>
    </>
  );
};

export default ProfilePage;
