import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import React from "react";
import { UserProfile } from "../../components/social/profilePage/userInfo";
import Costom404 from "../404";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { profileID: userId } = router.query;
  const { data, isLoading, error } = trpc.user.getUserProfile.useQuery(
    {
      userId: `${userId}`,
    },
    {
      queryKey: ["user.getUserProfile", { userId: `${userId}` }],
      retry: false,
      cacheTime: 1000 * 60 * 5, //5min
      staleTime: 1000 * 60 * 5,
      enabled: router.isReady && !!userId,
    }
  );

  if (isLoading) return <div>loding...</div>;
  if (error) {
    Costom404;
  }
  function capitalizeFirstLetter(string: string | undefined | null) {
    return `${string?.charAt(0).toUpperCase()}` + `${string?.slice(1)}`;
  }
  const Username = capitalizeFirstLetter(data?.profile.getUser?.name);
  const image = `${
    data?.profile.getUser?.image
      ? data?.profile.getUser?.image
      : "https://www.freeiconspng.com/img/23486"
  }`;
  if (data)
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
          <div className="flex h-full w-full flex-col  bg-slate-500">
            <UserProfile type={"NOT_FOLLOWING"} image={image} name={Username} />
            <div className="h-full w-full bg-orange-500"> joojo</div>
          </div>
          <div className="h-full w-full bg-slate-600"></div>
          <div className="h-full w-full  bg-slate-700"></div>
        </main>
      </>
    );
  return null;
};

export default ProfilePage;
