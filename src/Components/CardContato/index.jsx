import React from 'react';
import { Link } from 'react-router-dom';
import { handlerDelete } from '../../handler/handler';

const CardContato = (props) => {
    const { cliente, setEnviado } = props

    const deletarCliente = ()=>{
        handlerDelete(cliente.ID)
        .then(()=>{
            alert(`Cliente ${cliente.NOME} deletado com sucesso`)
        })
    }

    return ( 
    <>
        <h3>Obrigado!!</h3>
        <h3>Em breve nossa equipe entrará em contato para agendar um horário</h3>

        <h5>Por favor, confirme seus dados. Você pode atualizá-los ou exclui-los abaixo.</h5>
        <h5>Caso opte por deletá-lo, nossa equipe não entrará mais em contato com você.</h5>
        <p><strong>Nome:</strong> {cliente.NOME}</p>
        <p><strong>Idade:</strong> {cliente.IDADE}</p>
        <p><strong>Genero:</strong> {cliente.GENERO}</p>
        <p><strong>Telefone:</strong> {cliente.TELEFONE}</p>
        <p><strong>Endereço:</strong> {cliente.RUA}, {cliente.NUMERO} </p>
        <p><strong>Tatuador:</strong> {cliente.TATUADOR}</p>

        <Link to={`/contato/atualizar/${cliente.ID}`}>
            <input type="submit" value="Atualizar" onClick={()=>{setEnviado && setEnviado(false)}} />
        </Link>
        <Link to="/">
            <input type="submit" value="Deletar" onClick={deletarCliente} />
        </Link>
        <Link to="/">
            <input type="submit" value="Voltar para Home" />
        </Link>

    </> 
    );
}
 
export default CardContato;