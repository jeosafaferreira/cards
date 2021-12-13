const db = require("../database/connection")

class EmployeeController {
	list(request, response) {
		db.select("*").from('employees').then(data => {
			response.json(data)
		}).catch(error => console.log(error))
	}

	teste(request, response) {
		db.select("*").from('employees').then(data => {
			response.json(data)
		}).catch(error => console.log(error))
	}

	save(request, response) {
		console.log("teste")
		response.json("Teste")
		// const { nome, documento, matricula, empresa } = request.body
		// console.log("---- Salvando usuário ----")
		// console.log("Dados: " + nome, documento, matricula, empresa)
		// db.insert({
		// 	nome, documento, matricula, empresa

		// }).table("employees").then(data => {
		// 	console.log(data)
		// 	response.json({ message: "Tarefa criada com sucesso!" })
		// }).catch(error => {
		// 	console.log(error)
		// })
	}

	// 	novaTarefa(request, response) {
	// 		const { tarefa, descricao, responsavel } = request.body

	// 		console.log(tarefa, descricao, responsavel)

	// 		database.insert({ tarefa, descricao, responsavel }).table("tasks").then(data => {
	// 			console.log(data)
	// 			response.json({ message: "Tarefa criada com sucesso !" })

	// 		}).catch(error => {
	// 			console.log(error)
	// 		})

	// 	}

	// 	listarTarefas(request, response) {
	// 		database.select("*").table("tasks").then(tarefas => {
	// 			console.log(tarefas)
	// 			response.json(tarefas)
	// 		}).catch(error => {
	// 			console.log(error)
	// 		})
	// 	}

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