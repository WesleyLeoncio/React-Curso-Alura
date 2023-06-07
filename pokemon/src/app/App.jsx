import { useState } from 'react'
import './App.css'
import Banner from '../components/banner'
import Formulario from '../components/formulario'
import Categoria from '../components/categoria';
import Footer from '../components/Footer';

function App() {

  const categorias = [
    {
        nome: 'Fire',
        corPrimaria: '#C92727',
        corSecundaria: '#FF746E',
    },
    {
        nome: 'Water',
        corPrimaria: '#047FFF',
        corSecundaria: '#7ED9F1',
    },
    {
        nome: 'Grass',
        corPrimaria: '#31D52D',
        corSecundaria: '#A4FFA1',
    },
    {
        nome: 'Electric',
        corPrimaria: '#f1ec01',
        corSecundaria: '#FBFF68',
    },
 
]

  const [pokemons, setPokemons] = useState([]);
  const aoNovoPokemonAdicionado = (pokemon) => {
    setPokemons([...pokemons,pokemon]);
  }

  return (
    <>
      <Banner/>
      <Formulario aoPokemonCadastrado={pokemon => aoNovoPokemonAdicionado(pokemon)} categorias={
        categorias.map(categoria => categoria.nome) }/>
      {categorias.map(categoria => <Categoria
        key={categoria.nome}
        nome={categoria.nome}
        corPrimaria={categoria.corPrimaria}
        corSecundaria={categoria.corSecundaria}
        pokemonsT={pokemons.filter(pokemon => pokemon.categoria === categoria.nome)}
      />)}
      <Footer/>
    </>
  )
}

export default App
