import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router';
import { Switch } from 'react-router-dom';
import Atualizar from '../Atualizar';
import CardContato from '../CardContato';
import Formulario from '../Formulario/Formulario';

const Contato = (props) => {
    const { atualizar } = props
    const [ enviado, setEnviado] = useState(false)
    const [ cliente, setCliente] = useState({})
    
    const getClient = async (novoCliente) =>{
        setCliente(await novoCliente)
        setEnviado(true)
    }

    return ( 
    <>
        <Switch>
            <Route exact path="/contato">
            {
                enviado ?
                <CardContato cliente={cliente}/>
                : <Formulario
                getClient = {getClient}/>
            }
            </Route>
            <Route exact path={`/contato/atualizar/:id`}>
                <Atualizar />
            </Route>
        </Switch>
        
    </> );
}
 
export default Contato;