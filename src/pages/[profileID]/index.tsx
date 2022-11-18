import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { trpc } from "../../utils/trpc";
import React, { useState } from "react";

const RE_URL = /\w+:\/\/\S+/g;

function linkify(str: string) {
  let match;
  const results = [];
  let lastIndex = 0;
  while ((match = RE_URL.exec(str))) {
    const link = match[0];
    if (lastIndex !== match.index) {
      const text = str.substring(lastIndex, match.index);
      results.push(<span key={results.length}>{text}</span>);
    }
    results.push(
      <a
        className="text-blue-700 hover:text-blue-600"
        key={results.length}
        rel="noreferrer"
        href={link}
        target="_blank"
      >
        {link}
      </a>
    );
    lastIndex = match.index + link!.length;
  }
  if (results.length === 0) {
    return str;
  }
  if (lastIndex !== str.length) {
    results.push(<span key={results.length}>{str.substring(lastIndex)}</span>);
  }
  return results;
}
type Acations = {
  type: "NOT_FOLLOWING" | "FOLLOWING" | "MY_PROFILE";
  handelFollow: () => null;
  handelUnfollow: () => null;
};
const Acations = ({ type, handelFollow, handelUnfollow }: Acations) => {
  const onFollowClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    handelFollow();
  };

  const onUnFollowClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    handelUnfollow();
  };
  return (
    <div>
      <>
        {(() => {
          switch (type) {
            case "FOLLOWING":
              return (
                <>
                  <button
                    type="button"
                    onClick={onUnFollowClick}
                    className="inline-block rounded-full border-[1px] border-blue-800 px-6 py-2.5 text-base leading-tight text-white shadow-lg transition duration-150 ease-in-out hover:border-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg"
                  >
                    Following
                  </button>
                </>
              );
            case "MY_PROFILE":
              return null;
            case "NOT_FOLLOWING":
              return (
                <>
                  <button
                    onClick={onFollowClick}
                    type="button"
                    className="inline-block rounded-full border-[1px] border-blue-800 px-6 py-2.5 text-base leading-tight text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Follow
                  </button>
                </>
              );
          }
        })()}
      </>
    </div>
  );
};

type UserProfile = {
  name: string;
  image: string;
  type: "NOT_FOLLOWING" | "FOLLOWING" | "MY_PROFILE";
};
const UserProfile = ({ name, image, type }: UserProfile) => {
  const [showDetails, setShowDetails] = useState(false);
  const handelShowClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation;
    setShowDetails(!showDetails);
  };
  const handelFollow = () => {
    return null;
  };
  const handelUnfollow = () => {
    return null;
  };
  console.log(showDetails);
  const Followers = 50;
  return (
    <>
      <div className="profile relative h-96 w-full bg-[#0f172a]">
        {/* useer banner  */}
        <div className="banner relative h-20 w-full bg-orange-300">
          <Image
            src={"/img/testBanner.webp"}
            alt={`anime image of banner of name`}
            layout={"fill"}
          />
        </div>
        {/* user image , name ,followers  */}
        <div className="ml-2 flex">
          {/* user image */}
          <div className="dp relative mt-[-2.5rem]  h-32 w-32 rounded-full border-4 border-[#0f172a]">
            <Image
              className="inline rounded-full border-2 border-[#0f172a] object-cover"
              src={image}
              alt={`anime image of banner of name`}
              layout={"fill"}
            />
          </div>
          {/* user name and followers */}
          <div className="name ml-4 mt-2 ">
            <div className="name text-xl font-bold text-white">{name}</div>
            <div className="follow-count mt-2  font-medium text-white">
              {`${Followers}`}
              <span className=" text-[#72777c]"> Followers</span>
            </div>
          </div>
        </div>
        {/* Acations (follow btn  or following ) */}
        <div className="mt-3 ml-3 space-x-2">
          <Acations
            type={type}
            handelFollow={handelFollow}
            handelUnfollow={handelUnfollow}
          />
        </div>
        {/* dit profile or detailes components */}
        <div className="top-right absolute top-0 right-0 mr-3 mt-3 h-6 w-6 bg-lime-600">
          {/* add edit profile or detailes components base on profile*/}
        </div>
        {/* Details */}
        {showDetails ? (
          <div className="detaile mt-4 ml-3 mr-3 h-[25vh] text-sm text-white transition duration-150 ease-in-out">
            {linkify(
              `Hi am subrat, I like anime, manga and games pls rate my 3x3 iflike them contact me at http://localhost`
            )}
          </div>
        ) : null}

        {/* show more or less btn */}
        <div className="show-more absolute bottom-0 right-0 mr-1 mb-1 cursor-pointer text-sm font-semibold text-gray-500 hover:text-gray-50">
          {showDetails ? (
            <div onClick={handelShowClick}>show less</div>
          ) : (
            <div onClick={handelShowClick}>show more</div>
          )}
        </div>
      </div>
    </>
  );
};

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
    router.push("/404");
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
};

export default ProfilePage;
