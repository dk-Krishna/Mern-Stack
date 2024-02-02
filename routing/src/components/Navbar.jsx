import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
        <NavLink to={"/"}> Home </NavLink>
        <NavLink to={"/about"}> About </NavLink>
        <NavLink to={"/contact"}> Contact </NavLink>
    </Fragment>
  );
};

export default Navbar;