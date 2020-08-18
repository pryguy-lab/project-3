import React, { Component } from "react";

const Home = (props) => {
  return (
    <div>
      <p className="text-4xl text-red-600">Home Page</p>
      <h1>Status: {props.loggedInStatus}</h1>
    </div>
  );
};

export default Home;
