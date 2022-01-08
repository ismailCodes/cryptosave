import NavBar from "./NavBar";

export default function PageWrapper({ children }) {
  return (
    <div className="w-screen h-screen font-openSans relative bg-gradient-to-b from-zinc-800 to-zinc-900">
      <NavBar />
      <div className="container w-full lg:w-10/12">{children}</div>
    </div>
  );
}
