import PokedexLogo from './assets/Pokedex_logo.svg';
import CapturedPokemonsButton from './components/CapturedPokemonsButton';
import './App.css';
import './variables.css';

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <div className='pokedexLogo'>
          <img src={PokedexLogo}></img>
        </div>
        <CapturedPokemonsButton />
      </header>
    </div>
  );
}

export default App;
