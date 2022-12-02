import { useRouter } from "next/router";
import { useState, useLayoutEffect } from "react";
import { Costom404 } from "../../../pages/404";
import { trpc } from "../../../utils/trpc";
import { TxT, TxTList } from "./postFeedAndList";
import { UserProfile } from "./userInfo";
import Image from "next/image";
import { Comments } from "../posts/comments";

export const posts = [
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
  console.log(image, "iim");
  if (data)
    return (
      <>
        <div className="flex h-full w-full flex-col  bg-slate-500">
          <UserProfile type={"FOLLOWING"} image={image} name={Username} />
          <TxTList acative={acative} posts={posts} />
        </div>

        {/* temp post for testing */}
        <TxT posts={posts} acative={acative} />
        <Comments image={image} />
        <div className="relative overflow-x-clip overflow-y-scroll bg-[#0f172a] scrollbar-hide">
          {/* <div className="add-comment fixed w-full bg-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            dignissimos? Maiores vel deserunt laborum quasi perferendis
            quibusdam eos illum alias, hic qui praesentium voluptate fugiat
            explicabo quia corrupti maxime sed!
          </div> */}
          {posts.map((_, i) => {
            return (
              <div
                key={i}
                className="comment relative m-3 flex justify-start p-1"
              >
                <div className="report absolute top-0 right-0 mt-2 mr-1 rotate-90 cursor-pointer text-lg font-bold text-white hover:text-cyan-500">
                  ...
                </div>
                <div className="user-avater relative mr-2 aspect-square h-9 w-9">
                  <Image
                    className="inline rounded-full object-cover"
                    src={image}
                    alt="Profile image"
                    fill={true}
                  />
                </div>
                <div className="comment-content w-full p-2 shadow-sm">
                  <div className="name text-white">
                    <strong>Sarah</strong>
                    <span className="ml-1 text-sm font-medium text-gray-500">
                      3:34 PM
                    </span>
                  </div>
                  <div className="comment-text text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    doloremque eius.
                  </div>
                  <div className="interactions flex w-full items-end justify-between ">
                    <div className="replies">
                      <div className="group mt-4 flex cursor-pointer items-center ">
                        <div className="flex items-center">
                          <div className="mr-2 flex -space-x-2">
                            <div className="relative h-6 w-6">
                              <Image
                                className="rounded-full border border-[#0f172a] "
                                src={image}
                                alt="Profile image"
                                fill={true}
                              />
                            </div>
                            <div className="relative h-6 w-6">
                              <Image
                                className="rounded-full border border-[#0f172a]"
                                src={image}
                                alt="Profile image"
                                fill={true}
                              />
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-gray-500 group-hover:text-gray-200">
                            {posts.length}
                          </div>
                          <div className="ml-1 text-sm font-semibold text-gray-500 group-hover:text-gray-200">
                            Replies
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="like&dislike flex">
                      <div className="like h-4 w-4 cursor-pointer ">
                        <div className="like-btn aspect-square h-full w-full">
                          <svg
                            fill="#00ff00"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 478.2 478.2"
                          >
                            <g>
                              <path
                                d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
		c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
		c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
		C444.875,295.3,440.675,304.4,431.975,313.4z"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="dislike ml-3 h-4 w-4 rotate-180 cursor-pointer ">
                        <div className="like-btn aspect-square h-full w-full">
                          <svg
                            fill="#00ffff"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 478.2 478.2"
                          >
                            <g>
                              <path
                                d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
		c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
		c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
		C444.875,295.3,440.675,304.4,431.975,313.4z"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  return null;
};

export default Profile;
