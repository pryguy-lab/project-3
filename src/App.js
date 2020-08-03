import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Todo from "./components/Todo";
import Contact from "./components/Contact";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-screen-sm text-center border-8 bg-indigo-300 border-gray-600 text-center h-screen">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/Todo" component={Todo} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
