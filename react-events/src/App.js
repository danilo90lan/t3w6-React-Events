import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numberOfPokemon: 6
    }
  }

  exampleFunc1() {
    return console.log("First click");
  }

  IncreasePokemonNumber = () => {
    this.setState({numberOfPokemon: this.state.numberOfPokemon + 1});
  }

  decreasePokemonNumber = () => {
    this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
  }

  render() {
    return (
      <>
      <h1>Hello world</h1>
      <h4>Number of Pokemon {this.state.numberOfPokemon}</h4>
      <button onClick={
        this.decreasePokemonNumber
      }>Increase Pokemon Amount</button>
      <button onClick={
        this.IncreasePokemonNumber
      }>Decrease Pokemon amount</button>
      </>
    )
  }
}
