import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { profileID } = router.query;
  const { data, isLoading } = trpc.user.getUserProfile.useQuery({
    userId: `${profileID}`,
  });
  if (isLoading) return <div>loding...</div>;
  return (
    <>
      <Head>
        <title>3x3</title>
        <meta name="3x3" content="create a 3x3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1>{profileData.data?.profile}</h1> */}
        <h2> /n path {`${JSON.stringify(data)}`}</h2>
        <h1>sss {profileID}</h1>
        {/* <div className="flex w-full items-center justify-center pt-2 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>

        <AuthShowcase /> */}
      </main>
    </>
  );
};

export default ProfilePage;
