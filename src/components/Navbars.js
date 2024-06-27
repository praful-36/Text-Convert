import React from "react";
import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary Navbar p-1">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center flex-row">
        <a className="navbar-brand" href="/">Textify</a>
          <li className="nav-item m-1">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item m-1">
            <Link className="nav-link" to="/About">About</Link>
          </li>
        </ul>
     
    </nav>
  );
}
