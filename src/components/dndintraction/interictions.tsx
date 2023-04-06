interface Props {
  text: string; // the text to share on Twitter
  url: string; // the URL to share
}

const ShareOnTwitter: React.FC<Props> = ({ text, url }) => {
  const handleClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <button className="justify-cnter flex items-center" onClick={handleClick}>
      <i className=" fill-blue-600 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            fill="1d9bf0"
            d="M21.3 5.54c-.77.34-1.6.57-2.47.67a4.28 4.28 0 0 0 1.87-2.36c-.82.49-1.73.84-2.7 1.03A4.27 4.27 0 0 0 15.66 3c-2.35 0-4.26 1.92-4.26 4.28 0 .34.04.67.11.98-3.54-.18-6.68-1.87-8.78-4.44-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.55-.7-.02-1.36-.21-1.93-.52v.05c0 2.06 1.47 3.77 3.43 4.16-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.68 2.1 2.9 3.95 2.93-1.45 1.14-3.28 1.82-5.26 1.82-.34 0-.68-.02-1.02-.06 1.88 1.2 4.1 1.9 6.5 1.9 7.8 0 12.07-6.46 12.07-12.07 0-.18 0-.35-.01-.53.83-.59 1.55-1.32 2.12-2.15l-.01-.01z"
          ></path>
        </svg>
      </i>
      <div>Share on Twitter</div>
    </button>
  );
};
const Intreaction = () => {
  return (
    <>
      <div className=" flex w-full justify-around  text-white">
        <div className="share-on-twitter">
          <ShareOnTwitter
            text="Cool article"
            url="http://localhost:3000/create3x3/previewImage"
          />
        </div>
        <div className="downloade">downloade</div>
        <div className="save">save</div>
      </div>
    </>
  );
};

type moveAcativeType = {
  format: string;
  id: number;
  img: string;
  titleEng: string;
  titleRom: string;
};
const MangaT3TBoard = () => {
  return <></>;
};

export { Intreaction };