const LoadindCard = () => {
  //h-[100%] w-2 animate-pulse overflow-hidden  bg-neutral-800 bg-neutral-600 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg
  return (
    <div className="relative mx-auto mb-3 flex h-24 w-[85%] animate-pulse items-center justify-start overflow-hidden rounded-r-xl border border-transparent bg-[#031631] text-[#ffffff] shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 ">
      <div className=" relative mr-3 aspect-[85/115] h-[100%] animate-pulse bg-slate-600"></div>
      <div className=" flex h-[100%] flex-col justify-around align-top">
        <div className=" absolute bottom-0 right-0 mb-1 mr-5 h-5 w-5 rounded bg-slate-600 text-white"></div>
        <div className="  mr-[6px]  text-sky-500 ">
          <div className="mb-2 h-3 w-56 animate-pulse rounded-2xl bg-neutral-600"></div>
          <div className="mb-2 h-3 w-56 animate-pulse rounded-2xl bg-neutral-600"></div>
          <div className="mb-2 h-3 w-56 animate-pulse rounded-2xl bg-neutral-600"></div>
        </div>
        <div className=" h-4 w-12 animate-pulse rounded-2xl bg-neutral-600"></div>
      </div>
    </div>
  );
};

export const LoadingList = () => {
  return (
    <>
      <LoadindCard />
      <LoadindCard />
      <LoadindCard />
      <LoadindCard />
      <LoadindCard />
      <LoadindCard />
      <LoadindCard />
    </>
  );
};
