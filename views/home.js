import React from "react";
import Footer from "../components/footer/Footer";
import Proposal from "../components/proposal/Proposal";
import Header from "../components/header/Header.js";
import BannerRotator from "../components/banner-rotator/BannerRotator.js"

const Home = () => {
  return (
    <div>
      <Header />
      <BannerRotator/>
      <Proposal />
      <Footer />
    </div>
  );
};
export default Home;
