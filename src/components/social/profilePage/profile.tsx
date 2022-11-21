import { useRouter } from "next/router";
import { useState, useLayoutEffect } from "react";
import { Costom404 } from "../../../pages/404";
import { trpc } from "../../../utils/trpc";
import { TxT, TxTList } from "./postFeedAndList";
import { UserProfile } from "./userInfo";

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
  {
    id: "random6",
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
    id: "random7",
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
    id: "random8",
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
    id: "random9",
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
    id: "random10",
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
    id: "random11",
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
    id: "random12",
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
export type PostType = typeof posts;

export const Profile = () => {
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
    //get router id in acative state
    console.log("que", "Eo", postId);
    if (postId !== undefined) {
      console.log("que", "E", postId);
      setAcative(`${postId}`);
    }
    return;
  }, [router.query, postId]);

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
        <div className="flex h-full w-full flex-col  bg-slate-500">
          <UserProfile type={"NOT_FOLLOWING"} image={image} name={Username} />
          <TxTList acative={acative} posts={posts} />
        </div>

        {/* temp post for testing */}
        <TxT posts={posts} acative={acative} />

        <div className="h-full w-full  bg-slate-700"></div>
      </>
    );
  return null;
};

export default Profile;
