import React, { Component} from 'react'
import style from './formulario.module.css'


class Formulario extends Component{
    render(){
        return (
            <form>
                <fieldset>
                        <lengend>Cadastro para contato</lengend>
                        <div className={style.first}>
                            <input type="text" name="nome" placeholder="Seu Nome" ></input>
                        </div>
                        <div className={style.genero}>
                            <input className={style.flexBase} type="number" name="idade" placeholder="Idade"></input>
                                <div className={style.flexBase}><p>Gênero</p>
                            <input type="radio" name="genero" value="Masculino"></input>
                                <label>Masculino</label>
                            <input type="radio" name="genero" value="Feminino"></input>
                                <label>Feminino</label></div>
                        </div>
                        <div>
                            <input type="text" name="endereco" placeholder="Endereço"></input>
                            <input type="text" name="numero" placeholder="Número"></input>
                        </div>
                    <div><input type="text" name="cidade" placeholder="Cidade"></input></div>
                    <div><input type="text" name="etado" placeholder="Estado"></input></div>
                    <div><select name="tatuador" placeholder="Tatuador">
                        <option disabled selected>Tatuadores</option>
                        <option>Zé</option>
                        <option>Joao Fulgencio</option>
                        <option>Kin Yoka</option>
                    </select></div>
                </fieldset>
            </form>
        )
    }
}

export default Formulario