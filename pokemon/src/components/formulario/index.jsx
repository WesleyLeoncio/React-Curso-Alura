import CampoInput from '../campo-imput';
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
                <CampoInput
                    label="Nome"
                    obrigatorio={true}
                    placeholder="Digite o nome"
                    valor={nome}
                    restricao={50}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoInput label="Nivel"
                    obrigatorio={true}
                    placeholder="Digite o nivel atual"
                    valor={nivel}
                    restricao={3}
                    aoAlterado={valor => setNivel(valor)}
                />
                <CampoInput label="Imagem"
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