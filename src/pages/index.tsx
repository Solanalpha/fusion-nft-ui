import Footer from "components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div  className=" flex flex-col h-screen justify-between">
      <Head>
        <title>KillerCowboys Fusion Machine</title>
        <meta
          name="description"
          content="Burn 2 foxes NFT for 1 Killer cowboys"
        />
      </Head>
      <GalleryView />
      <Footer/>
    </div>
  );
};

export default Home;
