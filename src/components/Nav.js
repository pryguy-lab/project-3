import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/star.png";

function Nav() {
  return (
    <nav className="bg-black p-1 px-4 py-2 flex justify-between items-center text-opacity-75 text-white">
      <h3>
        <img src={Logo} alt="fire works" />
      </h3>
      <ul className=" flex justify-around items-center mx-4">
        <Link to="/">
          <li className="mx-4 text-red-400">Home</li>
        </Link>
        <Link to="/Todo">
          <li className="mx-4 text-teal-400">todo</li>
        </Link>
        <Link to="/Contact">
          <li className="mx-4 text-blue-400">Contact</li>
        </Link>
        <Link to="/About">
          <li className="mx-4 text-yellow-600">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
