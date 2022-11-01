type props = {
  searchkey: string | null;
};
export const NotFound = ({ searchkey }: props) => {
  return (
    <>
      <div className=" mr-auto ml-auto mt-8 flex h-96 w-[90%] flex-col items-center justify-center rounded-xl bg-[#031631] text-3xl text-sky-500">
        <span> Can't find results</span>
        <span>
          for <b>{` ${searchkey}`}</b>
        </span>
      </div>
    </>
  );
};
