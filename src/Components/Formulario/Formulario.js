import React, {useState} from 'react';
import style from './formulario.module.css';
import Cliente from '../../Model/Cliente';
import Alert from '../Alert'
import { handlerForms, handlerUpdate } from '../../handler/handler';
import { useForm } from 'react-hook-form';

const Formulario = ({ getClient, updateClient, atualizar, clienteAnterior, setIsLoaded }) => {
	const { register, handleSubmit } = useForm({
		defaultValues : clienteAnterior
	})
	const [alert, setAlert] = useState(false);
	const [msgErro, setMsgErro] = useState("");
    
	const onSubmit = async (data) => {
		setAlert(false)
		setMsgErro("")
		if(!data.NOME || !data.TELEFONE || !data.IDADE){
			setAlert(true)
			return;
		}
		try{
			const cliente = new Cliente(data)
			if(atualizar){
				handlerUpdate(clienteAnterior.ID , cliente)
				.then(()=>{
					updateClient(clienteAnterior.ID)
				})
			} else {
				setIsLoaded(false)
				getClient(await handlerForms(cliente)) 
			}
		}
		catch(e){
			setMsgErro(e.message)
			return
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
					<input type="text" {...register("NOME")} placeholder="* Seu Nome" />
				</div>

					<div className={style.genero} >
						<input className={style.flexBase} type="number" {...register("IDADE")} placeholder="* Idade"/>
						<div className={style.flexBase}>
							<p>Gênero</p>
							<input type="radio" {...register("GENERO")} value="Masculino"></input>
							<label>Masculino</label>
							<input type="radio" {...register("GENERO")} value="Feminino"></input>
							<label>Feminino</label></div>
						</div>

						<div className={style.debug}>
							<input type="text" {...register("TELEFONE")} placeholder="* (DDD) 0000-0000" />
							<input type="text" {...register("RUA")} placeholder="Rua" />
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
				<Alert show={alert}>Por favor, preencha os campos obrigatórios (*)</Alert>
				<Alert show={msgErro}>{msgErro}</Alert>
				</fieldset>
			</form>
		</div>
	)
}

export default Formulario;