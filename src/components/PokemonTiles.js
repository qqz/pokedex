import './PokemonTiles.css';
import PokemonTile from './PokemonTile';
import React from 'react';

class PokemonTiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then(response => response.json())
        .then(response => {

            this.setState({
                pokemons: response.results,
                nextRequest: response.next
            })
        })
        .catch(err => { console.log(err); 
        });
    }

    render(){
        const pokemons = this.state.pokemons;
        const pokemonItems = this.state.pokemons?.map((pokemon) => 
            <PokemonTile key={pokemon.name} props={pokemon} />
        )

        return (
            <div className="pokemonTiles">
                {pokemonItems}
            </div>
        );
    }

}

export default PokemonTiles;