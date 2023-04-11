import React, { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to={`heroes/1`}>Hero</Link>
    </>
  );
};

export default Home;
