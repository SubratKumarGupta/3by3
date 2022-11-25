import Image from "next/image";
import React from "react";
import { useState } from "react";
import { posts } from "../profilePage/profile";

type image = { image: string };

const AddReplyForm = () => {
  return (
    <>
      <div className="Reply ">
        <div className="input mx-auto  ">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-cyan-500 ">
              <input
                className="mr-3 w-full appearance-none border-none bg-transparent  px-2 leading-tight text-gray-300 focus:outline-none"
                type="text"
                placeholder="Add a comment"
                aria-label="Full name"
              ></input>
              <div className="actions mt-3 flex justify-between px-3">
                <div className="comment">
                  <button
                    className=" -mr-3  flex-shrink-0 rounded-full border-2 border-transparent px-2  pb-2 text-sm font-semibold text-white hover:text-cyan-500"
                    type="button"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="actions"></div>
      </div>
    </>
  );
};
const Reply: React.FC<{
  replier_image: string;
  replier_username: string;
}> = ({ replier_image, replier_username }) => {
  const [showAddReplies, setAddReplies] = useState(true);
  const handelShowAddRepliesOnclick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setAddReplies(!showAddReplies);
  };
  return (
    <div className=" relative mb-2">
      <div className="report absolute top-0 right-0 mt-1 -mr-4 rotate-90 cursor-pointer text-lg font-bold text-white hover:text-cyan-500">
        ...
      </div>
      <div className="profile mb-1 -ml-10 flex">
        <div className="replier-user-avater relative mr-2 aspect-square h-8 w-8">
          <Image
            className="inline rounded-full object-cover"
            src={replier_image}
            alt="Profile image"
            fill={true}
          />
        </div>
        <div className="replier-user-name text-gray-200">
          <strong>{replier_username}</strong>
          <span className="ml-1 text-sm font-medium text-gray-500">
            12:34 PM
          </span>
        </div>
      </div>
      <div className="content mb-2 text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non porro
        doloriatis corporis iusto, cupiditate aspernatur at cupiditate
        aspernatur at cupiditate aspernatur at
      </div>
      <div className="interactions flex justify-between">
        <div
          onClick={handelShowAddRepliesOnclick}
          className="reply group flex cursor-pointer items-center text-gray-500 hover:text-gray-200"
        >
          {showAddReplies ? <span>Reply</span> : <div>Cancel</div>}
        </div>
        <div className="like&dislike mr-3 flex">
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
      <div
        className={` ${
          showAddReplies ? "h-0 scale-0 opacity-0" : "opacity-1 scale-100"
        } add-reply w-full transition-all`}
      >
        <AddReplyForm />
      </div>
    </div>
  );
};
const Replies: React.FC<{
  image: string;
}> = ({ image }) => {
  const replies = ["1", "2", "3", "5", "6", "7"];

  return (
    <>
      {replies.map((replies, i) => {
        return (
          <Reply
            replier_image={image}
            key={i}
            replier_username={`replies ${replies}`}
          />
        );
      })}
      <div className="mt-5 flex  h-6 cursor-pointer justify-end text-gray-500 hover:text-white">
        Load more replies
      </div>
    </>
  );
};

const Comment: React.FC<image> = ({ image }) => {
  const [showReplies, setSnowReplies] = useState(false);
  const [showAddReplies, setAddReplies] = useState(true);

  const handelShowAddRepliesOnclick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setAddReplies(!showAddReplies);
  };

  const handelShowRepliesOnclick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setSnowReplies(!showReplies);
  };
  console.log(showReplies);
  const topRepliesPrewiew = [image, image, image];
  return (
    <>
      <div className="comment relative m-3 flex justify-start p-1">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. doloremque
            eius.
          </div>
          <div className="interactions flex w-full items-end justify-between ">
            <div className="flex items-center ">
              <div className="repliesPrewiew">
                <div
                  onClick={handelShowRepliesOnclick}
                  className="group mt-4 flex cursor-pointer items-center "
                >
                  <div className="flex items-center">
                    <div
                      className={`
                  ${showReplies ? "w-0 opacity-0" : "w-auto opacity-100"}
                  mr-2 flex -space-x-3 transition-all duration-200`}
                    >
                      {topRepliesPrewiew.map((imgSrc, i) => {
                        return (
                          <div key={i} className="relative h-6 w-6">
                            <Image
                              className="rounded-full border border-[#0f172a] "
                              src={imgSrc}
                              alt="Profile image"
                              fill={true}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-sm font-semibold text-gray-500 group-hover:text-gray-200">
                      {40}
                    </div>
                    <div className="ml-1 text-sm font-semibold text-gray-500 group-hover:text-gray-200">
                      Replies
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={handelShowAddRepliesOnclick}
                className={`reply group -mb-4 ml-5 flex cursor-pointer items-center text-gray-500 transition-all hover:text-gray-200`}
              >
                {showAddReplies ? <span>Reply</span> : <div>Cancel</div>}
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
          <div
            className={` ${
              showAddReplies ? "h-0 scale-0 opacity-0" : "opacity-1 scale-100"
            } add-reply w-full transition-all`}
          >
            <AddReplyForm />
          </div>
          <div
            className={`${
              showReplies
                ? "scale-0-100 opacity-100 "
                : "h-0 scale-y-0 opacity-0"
            } replies p-2
            transition-all duration-300`}
          >
            <Replies image={image} />
          </div>
        </div>
      </div>
    </>
  );
};

const AddCommentForm = ({ image }: { image: string }) => {
  return (
    <div className="Reply ">
      <div className="input mx-auto  ">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-green-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-300 focus:outline-none"
              type="text"
              placeholder="Add a comment"
              aria-label="Full name"
            ></input>
          </div>
          <div className="actions mt-3 flex justify-between px-3">
            <div className="profile-img">
              <div className="user-avater relative mr-2 aspect-square h-9 w-9">
                <Image
                  className="inline rounded-full object-cover"
                  src={image}
                  alt="Profile image"
                  fill={true}
                />
              </div>
            </div>
            <div className="comment">
              <button
                className="flex-shrink-0 rounded border-4 border-transparent py-1 px-2 text-sm text-teal-500 hover:text-teal-800"
                type="button"
              >
                Cancel
              </button>
              <button
                className="flex-shrink-0 rounded-full border-4 border-transparent bg-green-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-green-700"
                type="button"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="actions"></div>
    </div>
  );
};

export const Comments = ({ image }: { image: string }) => {
  const comments = posts;
  return (
    <>
      <div className="relative overflow-x-clip overflow-y-scroll bg-[#0f172a] scrollbar-hide">
        <div className="header flex justify-between">
          <div className="sortby group ">
            <div className="sortby-icon group ml-1 flex cursor-pointer">
              <svg
                className="h-8 w-8 group-hover:fill-cyan-400"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" />
                <path d="M0 0h48v48h-48z" fill="none" />
              </svg>
              <div className="ml-2 text-lg font-semibold text-gray-500 group-hover:text-gray-300">
                Sort by
              </div>
            </div>
            <div className="sortby-menu absolute z-20 ml-2  bg-slate-800 group-hover:block">
              <ul className="text-C absolute hidden rounded bg-green-500 pt-1  group-hover:block">
                <li className="cursor-pointer">
                  <a className="whitespace-no-wrap block rounded-t bg-inherit py-2 px-4 hover:text-blue-700">
                    Popularty
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-no-wrap block bg-inherit py-2 px-4 font-medium hover:text-blue-700">
                    Resent
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-no-wrap block rounded-b bg-inherit py-2 px-4 hover:text-blue-700">
                    Least Popular
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-2 mt-1 text-xl font-semibold text-gray-500 hover:text-green-500">
            {comments.length + " Comments"}
          </div>
        </div>
        <AddCommentForm image={image} />
        {comments.map((_, i) => {
          return <Comment image={image} key={i} />;
        })}
      </div>
    </>
  );
};
