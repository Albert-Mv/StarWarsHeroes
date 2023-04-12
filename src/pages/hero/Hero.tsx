import React, { FC } from "react";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";
import HeroInfo from "../../components/HeroInfo";

const Hero: FC = () => {
  return (
    <>
      <Header />
      <HeroInfo />
      <Footer />
    </>
  );
};

export default Hero;
