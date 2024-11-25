import React, {Component} from "react";

export default class PokemonCard extends Component {
    constructor() {
        super();

        this.state= {
            pokemonName: "",
            pokemonImage: ""
        }
    }
    async componentDidMount() {
        let randomNumber = Math.ceil(Math.random() * 1025);
        let response = await fetch(`http://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default
        })
    }

    render() {
            return (
                //group element in block
                    
                    <div className="pokemonCard">
                        {/* //receive data from API
                        //We can create a loading content (Conditional rendering) */}
                        {
                            //ternary operation
                            (this.state.pokemonImage && this.state.pokemonName) ?
                            //render content here if it's true 
                            <>
                                <h1>{this.state.pokemonName}</h1>
                                <img src = {this.state.pokemonImage} alt="pokemon"></img>
                            </>
                            :
                            // if it's false render this content
                            <h1>LOADING</h1>
                        }
                    </div>
            )
    }

}