import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { createRefWithDefualtValue } from "../../utils/CreateRefDefult";
import { Post3x3 } from "../posts/3x3";
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
      { root: PostTabRef.current, threshold: 1 }
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
        className="flex h-full w-full snap-y snap-mandatory flex-col overflow-y-scroll scroll-smooth bg-slate-600 scrollbar-hide"
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
              <Post3x3 name={post.name} />
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
