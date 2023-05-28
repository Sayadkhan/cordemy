import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessPage = () => {
  const { data: session } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (!session) {
    }
    router.replace("/users/login");
  });
  return (
    <div className="wrapper py-10 min-h-screen">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl flex items-center gap-3">
          <span className="text-emerald-500">
            <AiOutlineCheckCircle />
          </span>
          {"You've entrolled successfully"}
        </h2>
        <Button href="/orders" placeholder="Get to your orders" />
      </div>
    </div>
  );
};

export default SuccessPage;
