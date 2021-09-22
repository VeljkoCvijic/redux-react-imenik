import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Imenik
        </Link>
        <div>
          <Link to="/contacts/add" className="circle btn btn-light ml-auto">
          <span
                    className="material-icons"
                >
                    add
                </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;