import React, { Component } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="bg-gray-800 p-2 flex justify-around items-center text-opacity-75 text-white">
      <h3>logo</h3>
      <ul class="w-8 flex justify-around items-center mx-6">
        <Link to="/Home">
          <li class="mx-8 text-red-400">Home</li>
        </Link>
        <Link to="/Todo">
          <li class="mx-6 text-teal-400">todo</li>
        </Link>
        <Link to="/Contact">
          <li class="mx-6 text-blue-400">Contact</li>
        </Link>
        <Link to="/About">
          <li class="text-yellow-600">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
