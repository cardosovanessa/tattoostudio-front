import React from 'react';
import { Link } from 'react-router-dom';
import { handlerDelete } from '../../handler/handler';
import style from '../CardContato/cardContato.module.css'
import Button from '../Button/Button';

const CardContato = (props) => {
	const { cliente, setEnviado } = props

	const deletarCliente = ()=>{
		if(window.confirm("Deseja excluir seu contato?")){
			handlerDelete(cliente.ID)
			.then(()=>{
				alert(`Cliente ${cliente.NOME} deletado com sucesso`)
			})
		}
	}

	return ( 
	<>
		<div className={style.imagem}>
			<div className={style.clear}></div>
			<div className={style.confirmacao}>
				<h3>Agradeçemos seu contato!</h3>
				<h3>Em breve nossa equipe entrará em contato para agendar um horário.</h3>

				<h5>Por favor, confirme seus dados. Você poderá atualizá-los ou exclui-los logo abaixo.</h5>
				<h5>Caso opte por deletá-lo, nossa equipe não entrará mais em contato com você.</h5>
					<p><strong>Nome:</strong> {cliente.NOME}</p>
					<p><strong>Idade:</strong> {cliente.IDADE}</p>
					<p><strong>Gênero:</strong> {cliente.GENERO}</p>
					<p><strong>Telefone:</strong> {cliente.TELEFONE}</p>
					<p><strong>Endereço:</strong> {cliente.RUA}, {cliente.NUMERO} </p>
					<p><strong>Tatuador:</strong> {cliente.TATUADOR}</p>
				<div className={style.botoes}>

					<Link to={`/Cadastro/atualizar/${cliente.ID}`}>
							<Button onClick={()=>{setEnviado && setEnviado(false)}}>Atualizar</Button>
					</Link>
					<Link to="/">
							<Button onClick={deletarCliente}>Deletar</Button>
					</Link>
					<Link to="/">
							<Button>Início</Button>
					</Link>
					</div>
				</div>
			</div>
		</> 
	);
}
 
export default CardContato;