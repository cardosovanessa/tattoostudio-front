import React, { useState } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Atualizar from '../Atualizar';
import CardContato from '../CardContato';
import Formulario from '../Formulario/Formulario';

const Contato = () => {
	const [ enviado, setEnviado] = useState(false)
	const [ cliente, setCliente] = useState({})
	
	const getClient = async (novoCliente) =>{
		setCliente(await novoCliente)
		setEnviado(true)
	}

	return ( 
	<>
		<Switch>
			<Route exact path="/Cadastro/">
			{
				enviado ?
				<CardContato cliente={cliente}/>
				: <Formulario
				getClient = {getClient} />
			}
			</Route>
			<Route exact path={`/Cadastro/atualizar/:id`}>
				<Atualizar />
			</Route>
		</Switch>
    </> 
	);
}
 
export default Contato;