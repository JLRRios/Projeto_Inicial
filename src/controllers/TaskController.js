const database = require('../database/connection')
class TaskController {
    novaTarefa(request, response){
        const {cpf, nome, data_nasc, email, profissao, celular, cep, logradouro, complemento, bairro, localidade, estado} = request.body
        console.log(cpf, nome, data_nasc, email, profissao, celular, cep, logradouro, complemento, bairro, localidade, estado)
        database.insert({cpf, nome, data_nasc, email, profissao, celular, cep, logradouro, complemento, bairro, localidade, estado}).table("tasks").then(data =>{
            console.log(data)
            response.json({mensagem:"Dados incluídos com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController()
