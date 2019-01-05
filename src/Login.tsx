import Button from "@material-ui/core/Button";
import React, { Component, Props } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props: Props<any>) {
    super(props);
  }

  handleClick() {
    alert("yo");
  }

  render() {
    return (
      <div className="Login">
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Hello World
        </Button>
        <form>
          <input type="text" name="firstname" value="Mickey" />
          <input type="text" name="lastname" value="Mouse" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
