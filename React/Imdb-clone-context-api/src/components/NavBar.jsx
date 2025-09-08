import React from "react";
import Logo from "../assets/MovieLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 items-center pl-3 py-4">
        <li>
          <NavLink to="/">
            <img className="w-[50px]" src={Logo} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
            className="text-3xl font-bold text-blue-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchList"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
            className="text-3xl font-bold text-blue-500"
          >
            WatchList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
