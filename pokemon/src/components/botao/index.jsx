import './botao.css'
const Botao = ({nome})=>{
    return(
        <div className='alinhar'>
            <button className='botao'>{nome}</button>
        </div>
    )
}

export default Botao;