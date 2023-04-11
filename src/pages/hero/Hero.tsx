import React, { FC } from "react";
import { useParams } from "react-router-dom";

const Hero: FC = () => {
    let { id } = useParams();

  return <div>Hero Page {id}</div>;
};

export default Hero;
