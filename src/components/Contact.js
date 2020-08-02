import React, { Component } from "react";

const Contact = () => {
  return (
    <div>
      <p class="text-4xl text-blue-800">Contact Page</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
