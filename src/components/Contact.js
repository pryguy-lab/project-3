import React, { Component } from "react";

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <header class="text-4xl text-blue-900">Contact us</header>
        <form class="mt-8" action="">
          <input
            class="my-2 rounded"
            name="firstName"
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            class="my-2 rounded"
            name="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            class="my-2 rounded"
            name="userName"
            type="text"
            placeholder="User name"
            value={this.state.userName}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            class="my-2 rounded"
            name="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.change(e)}
          />
          <br />
          <input
            class="my-2 mb-8 rounded"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.change(e)}
          />
        </form>
        <button
          class="bg-blue-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={(e) => this.onSubmit(e)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Contact;
