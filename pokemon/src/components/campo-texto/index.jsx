import './CampoTexto.css';

const CampoTexto = ({label,placeholder,obrigatorio,aoAlterado,valor}) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    } 
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}></input>
        </div>
    )
}

export default CampoTexto;