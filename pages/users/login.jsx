
import SectionHeader from "@/components/SectionHeader";
import {FcGoogle} from "react-icons/fc"
import React from "react";

const LoginPage = () => {
  return <div className="wrapper py-10 min-h-screen">
    <SectionHeader span={"login"} h2={"get started with google"} p={"plse login"}/>
    <div><button className="flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg mt-5"><span><FcGoogle/></span>Sign in with Google</button></div>
  </div>;
};

export default LoginPage;
