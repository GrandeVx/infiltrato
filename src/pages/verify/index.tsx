import { useUser } from "@clerk/nextjs";
import { LoadingPage } from "@/components/Layout/Loading";

import { api } from "@/utils/api";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Verify() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const ctx = api.useContext();

  const { data, isLoading: userLoading } = api.user.getUser.useQuery({
    id: user?.id,
  });

  if (!isLoaded || userLoading) {
    return <LoadingPage />;
  }

  if (
    data &&
    data.city != "NULL" &&
    data.city != "NULL" &&
    data.city != "NULL"
  ) {
    router.push("/");
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center">
        <h1 className="text-3xl font-bold text-slate-200">
          Dicci qualcosa in più su di te
        </h1>
        <p className="mt-3 text-xl text-slate-500">
          Abbiamo bisogno di alcune informazioni per poterti offrire
          un'esperienza migliore
        </p>
      </div>
    </div>
  );
}
