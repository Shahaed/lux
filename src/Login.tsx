import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <form>
          <input type="text" name="firstname" value="Mickey" />
          <input type="text" name="lastname" value="Mouse" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
