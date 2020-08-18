import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    //this.props.onChange(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <header className=" text-4xl text-teal-700">Contact us</header>
        <form className="mt-4 " action="">
          <input
            className="my-2 rounded bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
            name="firstName"
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            className="my-2 rounded bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
            name="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            className="my-2 rounded bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
            name="userName"
            type="text"
            placeholder="User name"
            value={this.state.userName}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            className="my-2 rounded bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
            name="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            className="my-2 mb-8 rounded bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 mx-4 placeholder-purple-900 mb-4"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.change(e)}
          />
        </form>
        <button
          className="bg-blue-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={(e) => this.onSubmit(e)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
