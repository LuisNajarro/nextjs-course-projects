import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";

import UserProfile from "@/components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

export const getServerSideProps = (async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}) satisfies GetServerSideProps;

export default ProfilePage;
