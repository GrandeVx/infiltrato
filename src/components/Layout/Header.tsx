import { SignInButton, UserButton, useAuth, useUser } from "@clerk/nextjs";

import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <header className="bg-background_primary sticky top-0 z-10 flex h-[15vh] flex-row justify-between p-10">
      <section className="flex flex-col">
        <p className="text-2xl font-medium text-white">
          Hello, {isLoaded && user ? user.firstName : "Anonymous"}
        </p>
        <p className="text-xl font-light text-gray-300">
          Monday , September 25
        </p>
      </section>
      <section className="flex flex-row items-center justify-center gap-4">
        <div className="flex h-10 w-60 items-center justify-center rounded-full bg-white/10 p-5">
          <input
            type="text"
            className="f flex-1 rounded-full bg-transparent p-3 text-white placeholder-white placeholder-opacity-50"
            placeholder="@username / sub"
          ></input>
          <SearchIcon className="text-white" />
        </div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <div className="flex h-10 w-20 justify-center rounded-full bg-slate-200">
            <SignInButton afterSignInUrl="/verify" />
          </div>
        )}
      </section>
    </header>
  );
}
