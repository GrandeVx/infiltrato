import { useUser } from "@clerk/nextjs";
import { LoadingPage } from "@/components/Layout/Loading";

import { api } from "@/utils/api";
import { useEffect } from "react";

export default function Verify() {
  const { user, isLoaded } = useUser();

  const ctx = api.useContext();

  const { data, isLoading: userLoading } = api.user.getUser.useQuery({
    id: user?.id,
  });

  if (!isLoaded || userLoading) {
    return <LoadingPage />;
  }

  return <h1>Ciao</h1>;
}
