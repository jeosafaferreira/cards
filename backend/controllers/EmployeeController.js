const db = require("../database/connection")

class EmployeeController {
	list(request, response) {
		db.select("*").from('employees').then(data => {
			response.json(data)
		}).catch(error => console.log(error))
	}

	save(request, response) {
		const { name, document, registration, company, places, expires_on } = request.body

		console.log("Salvando ...")
		console.log(name, document, registration, company, places, expires_on)

		//Cadastra visitante
		db.insert({ name, document, registration, company, places, expires_on }).table("employees").then(data => {
			response.json(data)
		}).catch(error => {
			response.json(error)
		})

	}

	search(request, response) {
		console.log("Pesquisando por ..." + request.params.chave)
		const chave = request.params.chave

		db.select("*").from('employees').where('name', 'like', '%' + chave + '%').orWhere('company', 'like', '%' + chave + '%').then(data => {
			response.json(data)
		}).catch(error => {
			console.lor(error)
		})
	}

	// 	buscaId(request, response) {
	// 		const id = request.params.id

	// 		database.select("*").table("tasks").where({ id: id }).then(tarefa => {
	// 			response.json(tarefa)
	// 		}).catch(error => {
	// 			console.log(error)
	// 		})
	// 	}

	// 	editar(request, response) {
	// 		const id = request.params.id
	// 		const tarefa = request.body.tarefa
	// 		const descricao = request.body.descricao
	// 		const responsavel = request.body.responsavel

	// 		database.update({ tarefa: tarefa, descricao: descricao, responsavel: responsavel }).table("tasks").where({ id: id }).then(tarefa => {
	// 			response.json({ message: "Tarefa atualizada com sucesso!" })
	// 		}).catch(error => {
	// 			console.log(error)
	// 		})
	// 	}

	// 	deletar(request, response) {
	// 		const id = request.params.id

	// 		database.del().table("tasks").where({ id: id }).then(data => {
	// 			response.json({ message: "Tarefa deletada com sucesso." })
	// 		}).catch(error => {
	// 			response.json(error)
	// 		})
	// 	}
}


module.exports = new EmployeeController()