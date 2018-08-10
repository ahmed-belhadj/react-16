import React, { Component } from "react";

import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    username: "Matilde"
  };

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <UserInput value={this.state.username} onChange={this.handleChange} />
        <UserOutput username={this.state.username} />
        <UserOutput username="Reyna" />
      </div>
    );
  }
}

export default App;
