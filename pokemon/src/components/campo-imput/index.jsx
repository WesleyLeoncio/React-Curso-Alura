import './CampoInput.css';

const CampoTexto = ({label,placeholder,obrigatorio,aoAlterado,valor,restricao}) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    } 
    return (
        <div className="campo-input">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}  maxLength={restricao}></input>
        </div>
    )
}

export default CampoTexto;