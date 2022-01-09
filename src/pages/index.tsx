import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowTo from "../components/HowTo";
import PageWrapper from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <title>CryptoSave</title>
      </Head>
      <PageWrapper>
        <Hero />
      </PageWrapper>
      <HowTo />
      <Footer />
    </div>
  );
};

export default Home;
