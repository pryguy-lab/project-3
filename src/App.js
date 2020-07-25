import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header>Ella's todo list</header>
        <div>
          Add an item...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button></button>
        </div>
      </div>
    );
  }
}

export default App;
