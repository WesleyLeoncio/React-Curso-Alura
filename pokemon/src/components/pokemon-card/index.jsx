import './pokemonCard.css';
const PokemonCard = ({nome,nivel,imagem,corDeFundo}) => {
    let nivelL = "LV "+ nivel;
    let nomeL = nome.toUpperCase();
    return (
        <div className='pokemon'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape" style={{color: corDeFundo}}>
                <h4>{nomeL}</h4>
                <h5>{nivelL}</h5>
            </div>
        </div>
    )
}

export default PokemonCard;