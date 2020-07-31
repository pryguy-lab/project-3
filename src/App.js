import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <BrowserRouter>
        <body class="border-8 border-gray-600 text-center h-screen bg-blue-100">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <header class="text-6xl text-blue-400">todo list</header>
          <div class="text-4xl mb-8 ml-4">
            Add an item...
            <br />
          </div>
          <div>
            <input
              class="bg-blue-200 hover:bg-blue-400 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
              type="text"
              placeholder="Type item here..."
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => this.addItem()}
            >
              Add
            </button>
            <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li
                    class="text-black font-bold text-1xl text-center"
                    key={item.id}
                  >
                    {item.value}
                    <button
                      class="ml-8 bg-red-700 hover:bg-red-500 text-white font-bold mt-3 py-1 px-1 rounded"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </body>
      </BrowserRouter>
    );
  }
}

export default App;
