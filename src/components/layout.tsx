import Header from "./Layout/Header";
import HomeNav from "./Layout/HomeNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-background_primary flex h-screen w-screen flex-row">
        <HomeNav />
        <div className="flex flex-1 flex-col">
          <Header />
          <div className=" flex-1">{children}</div>
        </div>
      </main>
    </>
  );
}
