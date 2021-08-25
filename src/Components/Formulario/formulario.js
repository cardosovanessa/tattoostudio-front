import React, { Component} from 'react'
import style from './formulario.module.css'


class Formulario extends Component{
    render(){
        return (
            <form>
            <input type="text" name="nome" placeholder="Seu Nome" className={style.input}></input>
            <input type="number" name="idade" placeholder="Idade"></input>
            <p>Genero</p>
            <input type="radio" name="genero" value="Masculino"></input>
                <label>Masculino</label>
            <input type="radio" name="genero" value="Feminino"></input>
                <label>Feminino</label>
            <input type="text" name="endereco" placeholder="Endereço"></input>
            <input type="text" name="numero" placeholder="Número"></input>
            <input type="text" name="cidade" placeholder="Cidade"></input>
            <input type="text" name="etado" placeholder="Estado"></input>
            <select name="tatuador" placeholder="Tatuador">
                <option>Zé</option>
                <option>Joao Fulgencio</option>
                <option>Kin Yoka</option>
            </select>
            </form>
        )
    }
}

export default Formulario