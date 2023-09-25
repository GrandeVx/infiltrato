import { useUser } from "@clerk/nextjs";
import { LoadingPage } from "@/components/Layout/Loading";

import { api } from "@/utils/api";

export default function Verify() {
  const { user, isLoaded } = useUser();
  const ctx = api.useContext();

  if (!isLoaded || !user) {
    return <LoadingPage />;
  }

  const { data, isLoading: userLoading } = api.user.getUser.useQuery({
    id: user!.id,
  });

  return <h1>Ciao</h1>;
}
