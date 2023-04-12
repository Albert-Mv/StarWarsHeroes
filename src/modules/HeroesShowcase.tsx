import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IHero } from "../types/IHero";
import HeroCard from "../components/HeroCard";
import Pagination from "../components/Pagination";

const HeroesShowcase: FC = () => {
  const heroes = useSelector<RootState, IHero[]>((state) => state.heroes.list);
  const isLoading = useSelector<RootState, boolean>(state=>state.heroes.isLoading);
  
  return (
    <>
      {isLoading ? <h1>Loading ...</h1> : heroes.map((item) => (
        <HeroCard key={item.name} name={item.name} />
      ))}
      <Pagination />
    </>
  );
};

export default HeroesShowcase;
