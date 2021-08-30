import api from '../api/api'

const getUrl = "http://localhost:3050/clientes/dados/"
const postUrl = "http://localhost:3050/clientes/dados/novoCliente"
const delUrl = "http://localhost:3050/clientes/dados/delete/"
const putUrl = "http://localhost:3050/clientes/dados/edit/"


export const handlerForms  = (cliente)=>{
    return api(postUrl, 'POST', cliente)
    .then((result) => result.cliente[0])
}

export const handlerCompleteForms = (id)=>{
    return api(getUrl+id, 'GET')
    .then((result) => result[0])
}

export const handlerUpdate = (id, cliente)=>{
    return api(putUrl+id, 'PUT', cliente)
    .then((result) => result)
}

export const handlerDelete = (id)=>{
    return api(delUrl+id, 'DELETE')
    .then((result) => result)
}