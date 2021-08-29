import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { handlerCompleteForms } from '../../handler/handler';
import Formulario from '../Formulario/Formulario';

const Atualizar = () => {
    const { id } = useParams()
    const [ cliente, setCliente] = useState({})

    useEffect(()=>{
        console.log()
        handlerCompleteForms(id)
        .then(result=>{
            setCliente(result)
        })
    },[])

    return ( 
        <>
            {console.log(cliente)}
            <Formulario cliente={cliente} atualizar />
        </> 
     );
}
 
export default Atualizar;