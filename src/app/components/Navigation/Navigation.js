import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
