import type { NextPage } from "next";
import Hero from "../components/Hero";

const HeroProps = {
  title: "Your Future Self",
};

const Home: NextPage = () => {
  return (
    <>
      <Hero {...HeroProps} />
    </>
  );
};

export default Home;
