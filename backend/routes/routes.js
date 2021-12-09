const connection = require("../database/connection")
const express = require("express")
const router = express.Router()
const EmployeeController = require("../controllers/EmployeeController")

router.get("/list", EmployeeController.list)
// router.get("/listar", TaskController.listarTarefas)
// router.get("/tarefa/:id", TaskController.buscaId)
// router.put("/tarefa/:id", TaskController.editar)
// router.delete("/tarefa/:id", TaskController.deletar)

module.exports = router