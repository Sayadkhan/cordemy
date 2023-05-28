import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const OrdersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  });

  return <div>OrdersPage</div>;
};

export default OrdersPage;
