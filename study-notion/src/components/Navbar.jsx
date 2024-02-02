import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// importing images
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Fragment>
      <div className="flex justify-evenly">
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        <nav>
          <ul className="flex gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3 ml-5">
          {!isAuthenticated && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          {!isAuthenticated && (
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          )}

          {isAuthenticated && (
            <Link to="/logout">
              <button onClick={()=> {
                setIsAuthenticated(false);
                toast.success("Logged Out")
              }}>Logout</button>
            </Link>
          )}

          {isAuthenticated && (
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
