import type { NextPage } from "next";
import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Hero />
    </PageWrapper>
  );
};

export default Home;
