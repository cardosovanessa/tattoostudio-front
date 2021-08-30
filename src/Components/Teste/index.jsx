import React, { useEffect, useState } from 'react';
import api from '../../api/api'

const Teste = (props) => {
    const [dados, setDados] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [clicked, setClicked] = useState(false)
    const urlCliente = "http://localhost:3050/clientes/dados"
    const postUrl = "http://localhost:3050/clientes/dados/novoCliente"
    const delUrl = "http://localhost:3050/clientes/dados/delete/"
    const body = {
        "NOME": "João das Neves",
        "IDADE": "29",
        "GENERO": "Masculino",
        "RUA": "Rua das Maças",
        "NUMERO": "69",
        "CIDADE": "São Petesburgo",
        "ESTADO": "Igreja",
        "TELEFONE": "(24) 6969-4200",
        "TATUADOR": "Zé Caveira",
        "DATA_CADASTRO": "13/04/2016"
      }

    useEffect(() => {
        api(urlCliente, 'GET')
            .then((result) => {
                setDados(result)
                setIsLoaded(true)
            })

    }, [clicked])

    const post = () =>{
        api(postUrl, 'POST', body)
            .then((result) => {
                console.log(result)
                setClicked(!clicked)
            })
    }
    const deletar = () =>{
        const id = prompt("digite id: ")
        api(delUrl+id, 'DELETE')
            .then((result) => {
                console.log(result)
                setClicked(!clicked)
            })
    }

    return (
        <>
        <h1>Dados dos Clientes</h1>
        {isLoaded &&
            dados.map((cliente)=>{
                return (
                    <div key={cliente.ID} style={{border: "solid", margin:"20px"}}>
                        <p>ID: {cliente.ID}</p>
                        <p>Nome: {cliente.NOME}</p>
                        <p>Idade: {cliente.IDADE}</p>
                        <p>Genero: {cliente.GENERO}</p>
                        <p>Endereço: {cliente.RUA}, {cliente.NUMERO}</p>
                    </div>
                )
            })
        }
        <button onClick={post}>Postar</button>
        <button onClick={deletar}>Deletar</button>
        </>
    );
}

export default Teste;