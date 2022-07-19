import './PokemonTiles.css';
import PokemonTile from './PokemonTile';
import React from 'react';

class PokemonTiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
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

    loadMorePokemon(){
        fetch(this.state.nextRequest)
        .then(response => response.json())
        .then(response => {

            const morePokemons = this.state.pokemons.concat(response.results);

            this.setState({
                pokemons: morePokemons,
                nextRequest: response.next
            })
        })
        .catch(err => { console.log(err); 
        });
    }

    render(){
        const pokemons = this.state.pokemons;
        const pokemonItems = this.state.pokemons?.map((pokemon, index) => 
            <PokemonTile key={pokemon.name + index} props={pokemon} />
        )

        return (
            <div className='pokemonTilesContainer'>
                <div className='pokemonTiles'>
                    {pokemonItems}
                </div>
                <div className='loadMorePokemonContainer'>
                    <button className='loadMorePokemonButton' onClick={this.loadMorePokemon.bind(this)}>Load More Pokemon</button>
                </div>
            </div>
        );
    }

}

export default PokemonTiles;