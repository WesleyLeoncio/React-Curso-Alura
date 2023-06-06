import './listaSuspensa.css';

const ListaSuspensa = ({label,itens,obrigatorio,aoAlterado}) =>{
    return (
        <div className='lista-suspensa'>   
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio}>
                <option>Selecione</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;