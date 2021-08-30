import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { handlerCompleteForms } from '../../handler/handler';
import Formulario from '../Formulario/Formulario';
import CardContato from '../CardContato';

const Atualizar = () => {
    const { id } = useParams()
    const [ cliente, setCliente] = useState({})
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [enviado, setEnviado] = useState(false)

    useEffect(()=>{
        handlerCompleteForms(id)
        .then(result=>{
            setCliente(result)
            setIsLoaded(true)
        })
    },[enviado])
    
    const updateClient = async ()=>{
        setEnviado(true)
    }

    return ( 
        <>  
            {enviado ?  (<><CardContato cliente={cliente} setEnviado={setEnviado} /> </>)  
            : isLoaded && <Formulario clienteAnterior={cliente} updateClient={updateClient} atualizar />}
        </> 
     );
}
 
export default Atualizar;