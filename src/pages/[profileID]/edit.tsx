import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { trpc } from "../../utils/trpc";

const Profile: NextPage = () => {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const router = useRouter();
  const { profileID } = router.query;

  return (
    <>
      <Head>
        <title>3x3</title>
        <meta name="3x3" content="create a 3x3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center">
        <h1>{profileID}</h1>

        {/* <div className="flex w-full items-center justify-center pt-2 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>

        <AuthShowcase /> */}
      </main>
    </>
  );
};

export default Profile;
