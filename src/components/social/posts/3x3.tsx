import Image from "next/image";
import React from "react";
type Post3x3Props = {
  name: string;
};
export const Post3x3: React.FC<Post3x3Props> = ({ name }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const imgsrc =
    "https://lh3.googleusercontent.com/a/ALm5wu2TBWpEn7bwuHzCy6spgnVerBcRI3SR792ySXcT=s96-c";
  return (
    <div className="snap-center  bg-slate-900">
      <div className="header flex justify-between">
        <div className="title flex items-center justify-start text-white">
          <div className="profileImg relative m-1 ml-3 mt-2 h-9 w-9">
            <Image
              className="rounded-full border border-[#0f172a] "
              src={imgsrc}
              alt={"post image"}
              fill={true}
            ></Image>
          </div>
          <div className="ml-2">{`My Post Name`}</div>
        </div>
        <div className="rotate-90 text-3xl font-bold text-cyan-400">...</div>
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
              className="flex items-center justify-center bg-blue-500 transition-all hover:scale-125 hover:bg-cyan-600"
              key={i}
            >
              {name + i}
            </div>
          );
        })}
      </div>
      <div className="action flex h-14"></div>
    </div>
  );
};
