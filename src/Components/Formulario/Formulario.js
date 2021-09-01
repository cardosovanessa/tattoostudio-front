import React from 'react';
import style from './formulario.module.css';
import Cliente from '../../Model/Cliente';
import { handlerForms, handlerUpdate } from '../../handler/handler';
import { useForm } from 'react-hook-form';

const Formulario = ({ getClient, updateClient, atualizar, clienteAnterior }) => {
	const { register, handleSubmit } = useForm({
		defaultValues : clienteAnterior
	})
    
	const onSubmit = async (data) => {
		const cliente = new Cliente(data)
		if(atualizar){
			handlerUpdate(clienteAnterior.ID , cliente)
			.then(()=>{
				updateClient(clienteAnterior.ID)
			})
		} else {
			getClient(await handlerForms(cliente)) 
		}
	}

	return (
		<div className={style.pai}>
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				{
					atualizar && <p>To na atualizacao</p>
				}
				<h1>Cadastro para contato</h1>
				<div className={style.first}>
					<input type="text" {...register("NOME")} placeholder="Seu Nome" />
				</div>

					<div className={style.genero} >
						<input className={style.flexBase} type="number" {...register("IDADE")} placeholder="Idade"/>
						<div className={style.flexBase}>
							<p>Gênero</p>
							<input type="radio" {...register("GENERO")} value="Masculino"></input>
							<label>Masculino</label>
							<input type="radio" {...register("GENERO")} value="Feminino"></input>
							<label>Feminino</label></div>
						</div>

						<div className={style.debug}>
							<input type="text" {...register("TELEFONE")} placeholder="Telefone" />
							<input type="text" {...register("RUA")} placeholder="Endereço" />
							<input type="text" {...register("NUMERO")} placeholder="Número" />
						</div>

						<div className={style.debug}>
							<input type="text" {...register("CIDADE")} placeholder="Cidade" />
						</div>

						<div className={style.debug}>
							<input type="text" {...register("ESTADO")} placeholder="Estado" />
						</div>

						<div className={style.debug}>
							<select {...register("TATUADOR")} defaultValue="tatuadores" >
								<option value="tatuadores" disabled>Tatuadores</option>
								<option>Zé Covidsson</option>
								<option>João Fulgêncio</option>
								<option>Maria Braba</option>
							</select>
						</div>
					{
						atualizar ? <input type="submit" value="Atualizar" />
						: <input type="submit" value="Enviar"  /> 
					}                          
				</fieldset>
			</form>
		</div>
	)
}

export default Formulario;