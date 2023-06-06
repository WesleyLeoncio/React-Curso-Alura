import { useState } from 'react'
import './App.css'
import Banner from '../components/banner'
import Formulario from '../components/formulario'
import Categoria from '../components/categoria';

function App() {

  const categorias = [
    {
        nome: 'Fogo',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9',
    },
    {
        nome: 'Gelo',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Terra',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Elétrico',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
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
    </>
  )
}

export default App
