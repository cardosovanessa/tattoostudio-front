import moment from "moment"

class Cliente {
    constructor(cliente){
        this.NOME = cliente.nome
        this.IDADE = cliente.idade
        this.GENERO = cliente.genero
        this.RUA = cliente.rua
        this.NUMERO = cliente.numero
        this.CIDADE = cliente.cidade
        this.ESTADO = cliente.estado
        this.TELEFONE = cliente.telefone
        this.TATUADOR = cliente.tatuador
        this.DATA_CADASTRO = moment(new Date()).format("DD/MM/YYYY")
    }

}

export default Cliente