import './pokemonCard.css';
const PokemonCard = ({nome,nivel,imagem}) => {
    return (
        <div className='pokemon'>
            <div className='cabecalho'>
                <img src='src\assets\image\banner.png ' alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{nivel}</h5>
            </div>
        </div>
    )
}

export default PokemonCard;