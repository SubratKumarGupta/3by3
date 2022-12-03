import Image from "next/legacy/image";
import React from "react";
type Post3x3Props = {
  name: string;
};
export const Post3x3: React.FC<Post3x3Props> = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const imgsrc =
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png";
  return (
    <div className="snap-center  bg-black">
      <div className="header flex justify-between">
        <div className="title flex items-center justify-start text-white">
          <div className="profileImg relative m-1 ml-3 mt-2 h-9 w-9">
            <Image
              className="rounded-full border border-[#0f172a] "
              src={imgsrc}
              alt={"post image"}
              layout={"fill"}
            ></Image>
          </div>
          <div className="ml-2">{`My Post Name`}</div>
        </div>
        <div className="rotate-90 cursor-pointer text-3xl font-bold text-cyan-400">
          ...
        </div>
      </div>

      <div
        className="
       grid 
       aspect-square 
       h-[82vh] 
       cursor-pointer 
       grid-cols-3 
       grid-rows-3 
       gap-2 
       p-1 
       text-white"
      >
        {arr.map((v, i) => {
          return (
            <div
              className="z-10 flex items-center justify-center bg-blue-500 transition-all hover:z-20 hover:scale-125 hover:bg-cyan-600"
              key={i}
            >
              <div className="relative h-full w-full">
                <Image
                  src={imgsrc}
                  alt={""}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="action flex items-center justify-around  py-3">
        <div className="likebtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-9 w-9 fill-cyan-800 transition-all hover:fill-red-600 focus:fill-red-600 "
            viewBox="0 0 24 24"
          >
            <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />{" "}
          </svg>
        </div>
        <div className="share">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-9 w-9  fill-green-800 transition-all hover:fill-green-500"
            viewBox="0 0 24 24"
          >
            <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />{" "}
          </svg>
        </div>
        <div className="download">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-9 w-9 fill-blue-800 transition-all hover:fill-blue-600 "
            viewBox="0 0 24 24"
          >
            <path d="M15 10h4l-7 8-7-8h4v-10h6v10zm3.213-8.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
