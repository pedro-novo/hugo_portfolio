import type { NextPage } from "next";
import Head from "next/head";
import { Header, Body, Footer } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hugo Conceicao</title>
        <meta name="photography" content="Hugo Conceicao Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
