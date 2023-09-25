import { useUser } from "@clerk/nextjs";
import { LoadingPage } from "@/components/Layout/Loading";

import { api } from "@/utils/api";
import { useEffect } from "react";

export default function Verify() {
  const { user, isLoaded } = useUser();

  const ctx = api.useContext();

  if (!isLoaded) {
    return <LoadingPage />;
  }

  if (!user) {
    return <h1>Not logged in</h1>;
  }

  const { data, isLoading: userLoading } = api.user.getUser.useQuery({
    id: user.id,
  });

  console.log(data);

  return <h1>Ciao</h1>;
}
