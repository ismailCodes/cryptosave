import NavBar from "./NavBar";

export default function PageWrapper({ children }) {
  return (
    <div className="w-screen h-screen font-openSans relative hero-bg">
      <NavBar />
      <div className="container w-10/12">{children}</div>
    </div>
  );
}
