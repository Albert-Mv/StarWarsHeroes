import React, { FC } from "react";
import HeroesShowcase from "../../modules/HeroesShowcase";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";

const Home: FC = () => {
  return (
    <>
      <Header />
      <HeroesShowcase />
      <Footer />
    </>
  );
};

export default Home;
