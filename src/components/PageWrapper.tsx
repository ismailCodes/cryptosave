import NavBar from "./NavBar";

export default function PageWrapper({ children }) {
  return (
    <div className="w-screen h-screen font-openSans relative bg-gradient-to-b from-zinc-900 to-zinc-900">
      <NavBar />
      <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  );
}
