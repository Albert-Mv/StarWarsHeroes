import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Hero: FC = () => {
  const { id } = useParams();
  const name = useSelector<RootState, string>((state) => state.hero.name);

  return (
    <>
      <span>Hero ID: {id}</span>
      <div>Hero name: {name}</div>
    </>
  );
};

export default Hero;
