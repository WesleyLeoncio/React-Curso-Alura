import CampoTexto from '../campo-texto';
import ListaSuspensa from '../listaSuspensa';
import Botao from '../botao';
import './formulario.css';
import { useState } from 'react';

const Formulario = ({aoPokemonCadastrado,categorias}) => {

    const [nome, setNome] = useState('');
    const [nivel, setNivel] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoPokemonCadastrado({
            nome,
            nivel,
            imagem,
            categoria
        });
        setCategoria('');
        setNome('');
        setImagem('');
        setNivel('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={() => aoSalvar(event)}>
                <CampoTexto
                    label="Nome"
                    obrigatorio={true}
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto label="Nivel"
                    obrigatorio={true}
                    placeholder="Digite o nivel atual"
                    valor={nivel}
                    aoAlterado={valor => setNivel(valor)}
                />
                <CampoTexto label="Imagem"
                    obrigatorio={true}
                    placeholder="Digite o caminho da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Tipo"
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao nome='Cadastrar Card' />
            </form>
        </section>
    )
}

export default Formulario;