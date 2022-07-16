import PokeBallLogo from '../assets/pokeball.svg';
import './CapturedPokemonsButton.css';

export default function CapturedPokemonsButton() {
    return(
        <button className='capturedPokemonsButton'>
            <img src={PokeBallLogo}/>
            Captured Pokemons
        </button>
    );
}