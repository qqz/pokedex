import './PokemonTile.css';
import React from 'react';
import { capitalize, prefaceZero } from '../helpers';

class PokemonTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){

        fetch(this.props.props.url)
        .then(response => response.json())
        .then(response => {

            this.setState({
                picture: response.sprites.front_default,
                name: response.name,
                number: response.id,
                type: response.types
            });

        })
        .catch(err => { console.log(err); 
        });
    }

    render(){

             const types = this.state.type?.map((type, index) => {
                const typeName = type.type.name;
                return (index == 1 ? ' • ':'') + 
                        capitalize(typeName);
            });
        

        return (
            this.state.type &&
            <div className={`pokemonTile ${this.state.type[0].type.name}`}>
                <div className="pokemonPicture">
                    <img src={this.state.picture} />
                </div>
                <div className="pokemonInfo">
                    <div className="pokemonName">#{prefaceZero(this.state.number)} {capitalize(this.state.name)}</div>
                    <div className="pokemonTypes">{types}</div>
                </div>
            </div>
        );
    }
}

export default PokemonTile;