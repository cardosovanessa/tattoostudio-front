import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Atualizar from '../Atualizar';
import CardContato from '../CardContato';
import Formulario from '../Formulario/Formulario';
import Loading from '../Loading'

const Contato = () => {
    const [ enviado, setEnviado] = useState(false)
    const [ cliente, setCliente] = useState({})
    const [isLoaded, setIsLoaded] = useState(true);
    
    const getClient = async (novoCliente) =>{
        setCliente(await novoCliente)
        setEnviado(true)
        setIsLoaded(true)
    }

    useEffect(()=>{},[isLoaded])

    if(!isLoaded){
        return(
            <Loading />
        )
    }

    return ( 
    <>
        <Switch>
            <Route exact path="/Cadastro/">
            {
                enviado ?
                <CardContato cliente={cliente}/>
                : <Formulario
                getClient = {getClient} 
                setIsLoaded={setIsLoaded} />
            }
            </Route>
            <Route exact path={`/Cadastro/atualizar/:id`}>
                <Atualizar />
            </Route>
        </Switch>
        
    </> );
}
 
export default Contato;