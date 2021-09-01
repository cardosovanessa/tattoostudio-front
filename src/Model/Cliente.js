import moment from "moment";

class Cliente {
	constructor(cliente){
		this.NOME = cliente.NOME
		this.IDADE = cliente.IDADE
		this.GENERO = cliente.GENERO
		this.RUA = cliente.RUA
		this.NUMERO = cliente.NUMERO
		this.CIDADE = cliente.CIDADE
		this.ESTADO = cliente.ESTADO
		this.TELEFONE = cliente.TELEFONE
		this.TATUADOR = cliente.TATUADOR
		this.DATA_CADASTRO = moment(new Date()).format("DD/MM/YYYY");
	}
}

export default Cliente;