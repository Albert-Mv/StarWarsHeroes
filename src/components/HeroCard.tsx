import React, { FC } from "react";
import { IHero } from "../types/IHero";
import { Link } from "react-router-dom";

interface IHeroCard extends Pick<IHero, 'name'> {}

const HeroCard: FC<IHeroCard> = (props: IHeroCard) => {
  const { name } = props;

  return (
    <div>
      <Link to={`heroes/${name}`}>{name}</Link>
    </div>
  );
};

export default HeroCard;
