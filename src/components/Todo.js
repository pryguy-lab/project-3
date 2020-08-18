import React, { Component } from "react";

class Todo extends Component {
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
      <React.Fragment>
        <header className="text-4xl text-teal-800">todo list</header>
        <div className="text-2xl mb-2 mt-8 ml-4 text-black-700">
          Add an item...
          <br />
        </div>
        <div>
          <input
            className="bg-blue-300 hover:bg-blue-500 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li
                  className="text-black font-bold text-1xl text-center"
                  key={item.id}
                >
                  {item.value}
                  <button
                    className="ml-8 bg-red-700 hover:bg-red-500 text-white font-bold mt-3 py-1 px-1 rounded"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
