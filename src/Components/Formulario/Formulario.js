import React, { Component } from 'react'
import style from './formulario.module.css'
import Cliente from '../../Model/Cliente'
import { handlerForms } from '../../handler/handler'
import { Link, withRouter } from 'react-router-dom'


class Formulario extends Component {
    constructor(props){
        super(props)
        this.state = {
            cliente: {}
        }
    }

    createClient = async (event) =>{
        event.preventDefault()
        const cliente = new Cliente(this.state.cliente)
        this.props.getClient(await handlerForms(cliente)) 
    }
    updateClient = (data)=>{
        console.log(this.state.cliente)
    }

    populateClient = (obj) =>{
        this.setState({
            cliente : {
                ...this.state.cliente,
                ...obj
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.updateClient}>
                <fieldset>
                    {
                        this.props.atualizar && <p>To na atualizacao</p>
                    }
                    <h1>Cadastro para contato</h1>
                    <div className={style.first}>
                        <input type="text" name="nome" placeholder="Seu Nome" defaultValue={this.props.cliente?.NOME}
                            onChange={e=>{this.populateClient({"nome" : e.target.value})}} />
                    </div>
                    <div className={style.genero} >
                        <input className={style.flexBase} type="number" name="idade" placeholder="Idade"
                            onChange={e=>{this.populateClient({"idade" : e.target.value})}}
                            defaultValue={this.props.cliente?.IDADE} />
                        <div className={style.flexBase} 
                            onChange={e=>{this.populateClient({"genero" : e.target.value})}}>
                            <p>Gênero</p>
                            <input type="radio" name="genero" value="Masculino"></input>
                            <label>Masculino</label>
                            <input type="radio" name="genero" value="Feminino"></input>
                            <label>Feminino</label></div>
                        </div>
                    <div>
                        <input type="text" name="telefone" placeholder="Telefone" 
                            onChange={e=>{this.populateClient({"telefone" : e.target.value})}} />
                        <input type="text" name="endereco" placeholder="Endereço" 
                            onChange={e=>{this.populateClient({"rua" : e.target.value})}} />
                        <input type="text" name="numero" placeholder="Número" 
                            onChange={e=>{this.populateClient({"numero" : e.target.value})}} />
                    </div>
                    <div>
                        <input type="text" name="cidade" placeholder="Cidade" 
                            onChange={e=>{this.populateClient({"cidade" : e.target.value})}} />
                    </div>
                    <div>
                        <input type="text" name="estado" placeholder="Estado" 
                            onChange={e=>{this.populateClient({"estado" : e.target.value})}} />
                    </div>
                    <div>
                    <select name="tatuador" 
                        onChange={e=>{this.populateClient({"tatuador" : e.target.value})}}
                        defaultValue="tatuadores">
                        <option value="tatuadores" disabled>Tatuadores</option>
                        <option>Zé</option>
                        <option>Joao Fulgencio</option>
                        <option>Kin Yoka</option>
                    </select>
                    </div>
                    {
                        this.props.atualizar ? <input type="submit" value="Atualizar" />
                                  : <input type="submit" value="Enviar" onClick={e=>{this.createClient(e)}} /> 
                    }                          
                </fieldset>
            </form>
        )
    }
}

export default withRouter(Formulario)