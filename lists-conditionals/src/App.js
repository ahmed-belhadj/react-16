import React, { Component } from "react";

import Validation from "./components/Validation/Validation";
import Character from "./components/Character/Character";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleDeleteCharacter = event => {
    const inputArray = this.state.input.split("");
    inputArray.splice(event, 1);
    this.setState({ input: inputArray.join("") });
  };

  render() {
    const CharacterList = this.state.input.split("").map((character, index) => {
      return (
        <Character
          key={index}
          character={character}
          onClick={() => this.handleDeleteCharacter(index)}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>{this.state.input}</p>
        <Validation inputLength={this.state.input.length} />
        {CharacterList}
      </div>
    );
  }
}

export default App;
