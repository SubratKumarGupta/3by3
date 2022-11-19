import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import React, { useLayoutEffect, useState } from "react";
import { UserProfile } from "../../components/social/profilePage/userInfo";
import { Costom404 } from "../404";

const posts = [
  {
    id: "random",
    name: "my_post_3by3_1",
    comment: [
      {
        comenter: "subrat",
        content: "i like this",
      },
      {
        comenter: "subrat",
        content: "i like this",
      },
    ],
  },
  {
    id: "random1",
    name: "my_post_3by3_1",
    comment: [
      {
        comenter: "subrat",
        content: "i like this",
      },
      {
        comenter: "subrat",
        content: "i like this",
      },
    ],
  },
  {
    id: "random2",
    name: "my_post_3by3_1",
    comment: [
      {
        comenter: "subrat",
        content: "i like this",
      },
      {
        comenter: "subrat",
        content: "i like this",
      },
    ],
  },
  {
    id: "random3",
    name: "my_post_3by3_1",
    comment: [
      {
        comenter: "subrat",
        content: "i like this",
      },
      {
        comenter: "subrat",
        content: "i like this",
      },
    ],
  },
  {
    id: "random4",
    name: "my_post_3by3_1",
    comment: [
      {
        comenter: "subrat",
        content: "i like this",
      },
      {
        comenter: "subrat",
        content: "i like this",
      },
    ],
  },
  {
    id: "random5",
    name: "my_post_3by3_1",
    comment: [
      {
        comenter: "subrat",
        content: "i like this",
      },
      {
        comenter: "subrat",
        content: "i like this",
      },
    ],
  },
];
type TxT = {
  acative: string;
  posts: typeof posts;
  setAcative: (postID: string) => void;
};
const TxT = ({ posts, acative }: TxT) => {
  // userProfile-post-feed
  const element = document.getElementById(acative);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      {posts.map((post, i) => {
        return (
          <div id={post.id} key={i} className="mx-auto mt-3 mb-3 ">
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className=" h-96 w-96 cursor-pointer bg-[#0f172a]"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {`"Here are the biggest enterprise technology acquisitions of2021 so far," ${post.name}`}
                </p>
                <div className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
type T3TListType = {
  acative: string;
  posts: typeof posts;
};
const T3TList: React.FC<T3TListType> = ({ acative, posts }) => {
  const router = useRouter();
  console.log("que", "L", acative);
  return (
    <>
      <div className="relative flex h-full w-full justify-end  overflow-x-clip overflow-y-scroll bg-[#0f172a]  scrollbar-hide">
        <div className="pointer-events-none fixed h-full w-full shadow-t shadow-[#0f172a]"></div>
        <div className=" h-full w-full">
          <div className="3by3 h-7  pr-4 ">
            <span className="inline w-full cursor-pointer overflow-clip overflow-ellipsis whitespace-nowrap pl-24 text-xl font-semibold text-gray-400 hover:text-gray-300 active:text-blue-700"></span>
          </div>
          {posts.map((post, i) => {
            return (
              <Link
                key={i}
                replace={true}
                href={`/${router.query.profileID}?postId=${post.id}`}
              >
                <div key={i} className="3by3 h-12 cursor-pointer pr-4 ">
                  <span
                    className={` 
                  ${
                    acative == post.id
                      ? " my-2 text-2xl font-semibold text-blue-700 hover:text-blue-500 "
                      : "  text-xl font-semibold text-gray-400 hover:text-gray-300 "
                  }
                  inline 
                  w-full 
                  cursor-pointer 
                  overflow-clip
                  overflow-ellipsis  
                  whitespace-nowrap 
                  pl-24`}
                  >
                    {`--${post.name}`}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { profileID: userId, postId } = router.query;
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
  const [acative, setAcative] = useState(``);
  console.log("que", router.query);
  useLayoutEffect(() => {
    console.log("que", "Eo", postId);
    if (postId !== undefined) {
      console.log("que", "E", postId);
      setAcative(`${postId}`);
    }
    return;
  }, [router.query, postId]);
  console.log("que", "A", acative);
  if (isLoading) return <div>loding...</div>;
  if (error) {
    return <Costom404 />;
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
            <T3TList acative={acative} posts={posts} />
          </div>
          <div
            id="userProfile-post-feed"
            className="flex h-full w-full flex-col overflow-y-scroll scroll-smooth bg-slate-600 scrollbar-hide"
          >
            {/* temp post for testing */}
            <TxT posts={posts} setAcative={setAcative} acative={acative} />
          </div>
          <div className="h-full w-full  bg-slate-700"></div>
        </main>
      </>
    );
  return null;
};

export default ProfilePage;
