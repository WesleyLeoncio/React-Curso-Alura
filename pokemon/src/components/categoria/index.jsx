import PokemonCard from '../pokemon-card';
import './categoria.css';

const Categoria = ({ nome, corPrimaria, corSecundaria, pokemonsT }) => {
    return (
        (pokemonsT.length > 0) && <section className='categoria' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='pokemons'>
                {pokemonsT.map(pokemon => <PokemonCard key={pokemon.nome} nome={pokemon.nome} nivel={pokemon.nivel} imagem={pokemon.imagem} />)}
            </div>

        </section>
    )
}

export default Categoria;