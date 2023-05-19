import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";

import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = ({ session }) => {
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span={"login"}
        h2={"get started with google"}
        p={"plse login"}
      />
      <div className="flex justify-center">
        <button
          className="flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg mt-5 hover:bg-gray-700 duration-300"
          onClick={loginWithGoogle}
        >
          <span>
            <FcGoogle />
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
