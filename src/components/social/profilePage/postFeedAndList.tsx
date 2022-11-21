import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { createRefWithDefualtValue } from "../../utils/CreateRefDefult";
import { PostType } from "./profile";

//store the state for if postfeed is being auto scrolled or not
const isdPostsDivScrolling = createRefWithDefualtValue<boolean>(false);
//TxT stands for ThreebyThree
export type TxT = {
  acative: string;
  posts: PostType;
};

export const TxT = ({ posts, acative }: TxT) => {
  const router = useRouter();
  const PostTabRef = useRef<HTMLDivElement>(null);
  const PostItems = useRef<HTMLDivElement[]>([]);

  const element = document.getElementById(acative);
  if (element) {
    // 👇 Will scroll smoothly to the top of the acative section

    element?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entrys) => {
        if (entrys[0] && entrys.length === 1) {
          if (isdPostsDivScrolling.current) return;
          router.push(
            `/${router.query.profileID}?postId=${entrys[0].target.id}`
          );
        }
      },
      { root: null, threshold: 1 }
    );

    PostItems.current.forEach((post) => {
      Observer.observe(post);
    });
    return () => {
      //isdPostsDivScrolling.current == false;
      Observer.disconnect;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={PostTabRef}
        id="userProfile-post-feed"
        className="flex h-full w-full flex-col overflow-y-scroll scroll-smooth bg-slate-600 scrollbar-hide"
      >
        {posts.map((post, i) => {
          return (
            <div
              ref={(element) => {
                if (element !== null) {
                  PostItems.current.push(element);
                }
              }}
              id={post.id}
              key={i}
              className="mx-auto mt-3 mb-3 "
            >
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
      </div>
    </>
  );
};
type TxTListType = {
  acative: string;
  posts: PostType;
};
export const TxTList: React.FC<TxTListType> = ({ acative, posts }) => {
  const router = useRouter();
  //getting scroolabel post feed
  const postFeed = document.getElementById("userProfile-post-feed");
  const onScrollEnd = (fn: () => void): void => {
    if (!postFeed) return;
    let scrollTimeout: number | undefined;
    const listener = (): void => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        postFeed.removeEventListener("scroll", listener);
        fn();
      }, 100);
    };
    postFeed.addEventListener("scroll", listener);
  };
  // this function runs on auto scroll end
  onScrollEnd(() => {
    // console.log("scrollE");
    isdPostsDivScrolling.current = false;
  });
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
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  isdPostsDivScrolling.current = true;
                  router.push(`/${router.query.profileID}?postId=${post.id}`);
                }}
                key={i}
                className="3by3  h-12 cursor-pointer pr-4 "
              >
                <span
                  className={` 
                    ${
                      acative == post.id
                        ? " my-2 text-2xl font-semibold text-blue-700 transition-all hover:text-blue-500 "
                        : "  text-xl font-semibold text-gray-400 transition-all hover:text-gray-300 "
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
            );
          })}
        </div>
      </div>
    </>
  );
};
