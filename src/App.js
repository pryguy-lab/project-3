import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }
  state = {
    fields: {},
  };
  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };
  render() {
    return (
      <Router>
        <div className="max-screen-sm text-center border-8 bg-indigo-300 border-gray-700 text-center h-screen">
          <Nav />
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
              exact={true}
            />
            <Route path="/about" component={About} />
            <Route path="/Todo" component={Todo} />
            <Route
              path="/Form"
              render={(props) => (
                <Form
                  onChange={(fields) => this.onChange(fields)}
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
