import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname != "/" ? <Link to="/">Home</Link> : null}
      <div>Header</div>
    </>
  );
};

export default Header;
