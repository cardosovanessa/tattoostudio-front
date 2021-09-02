import moment from "moment";

class Cliente {
	constructor(cliente){
		this.NOME = this._validate(cliente.NOME, /^[a-zA-Z ]+$/, "Nome contem caracteres incorretos")
		this.IDADE = this._checkAge(cliente.IDADE)
		this.GENERO = cliente.GENERO
		this.RUA = cliente.RUA
		this.NUMERO = cliente.NUMERO
		this.CIDADE = cliente.CIDADE
		this.ESTADO = cliente.ESTADO
		this.TELEFONE = this._validate(cliente.TELEFONE, /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/, "Telefone contém caracteres incorretos")
		this.TATUADOR = cliente.TATUADOR
		this.DATA_CADASTRO = moment(new Date()).format("DD/MM/YYYY");
	}

	_validate(text, regex, errorMsg){
		if(regex.test(text))
			return text
		else
			throw new Error(errorMsg)
	}

	_checkAge(age){
		if(age < 18)
			throw new Error("Você precisa ser maior de 18 anos")
		else
		return age
	}

}

export default Cliente;