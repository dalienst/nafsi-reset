"use client";

import { useSession } from "next-auth/react";

function useAxiosAuth(contentType = "multipart/form-data") {
  const { data: session } = useSession();

  const tokens = session?.user?.access;

  const authenticationHeader = {
    headers: {
      Authorization: "Bearer" + " " + tokens,
      "Content-Type": contentType,
    },
  };

  return authenticationHeader;
}

export default useAxiosAuth;
