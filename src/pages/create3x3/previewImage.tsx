import type { NextPage } from "next";
import Head from "next/head";

const Preview: NextPage = () => {
  return (
    <Head>
      <title>Hello world</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
      <meta property="og:url" content="http://localhost:3000/api/og" />
      <meta property="og:title" content="A Twitter for My Sister" />
      <meta
        property="og:description"
        content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
      />
      <meta property="og:image" content="http://localhost:3000/api/og" />
    </Head>
  );
};

export default Preview;
