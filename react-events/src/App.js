import React, { Component } from 'react';
import './App.css';
import PokemonCard from './components/pokemonCard';

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
    this.setState({ numberOfPokemon: this.state.numberOfPokemon + 1 });
  }

  decreasePokemonNumber = () => {
    if (this.state.numberOfPokemon > 0) {
      this.setState({ numberOfPokemon: this.state.numberOfPokemon - 1 });
    }

  }

  iterate() {
    for (let i = 0; i < this.state.numberOfPokemon; i++) {
      return <PokemonCard/>
    }
  }

  render() {
    return (
      <>
        <h1>Hello world</h1>
        <h4>Number of Pokemon {this.state.numberOfPokemon}</h4>
        <button onClick={
          this.decreasePokemonNumber
        }>Decrease Pokemon Amount</button>
        <button onClick={
          this.IncreasePokemonNumber
        }>Increase Pokemon amount</button>
        { 
        // creates an array of given length
          Array(this.state.numberOfPokemon)
          // fill the array with empty values
          .fill(null)
          // iterates over each elelemnt of the array and return the pokemonCard element
          .map((element, index) => {
            return <PokemonCard key = {index + 1}/>
          })
        }

        {/* {
          this.iterate()
        } */}
        

        <PokemonCard/>
        <button onClick={ () => {
          this.IncreasePokemonNumber();
          this.exampleFunc1();
        }}>Random button</button>
      </>
    )
  }
}
