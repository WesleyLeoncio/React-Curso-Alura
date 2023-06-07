import './listaSuspensa.css';

const ListaSuspensa = ({label,itens,obrigatorio,aoAlterado,valor}) =>{
    return (
        <div className='lista-suspensa'>   
            <label>{label}</label>
            <select required={obrigatorio} onChange={evento => aoAlterado(evento.target.value)} value={valor}>
                <option value="">Selecione</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;