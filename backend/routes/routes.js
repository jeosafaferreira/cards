const connection = require("../database/connection")
const express = require("express")
const router = express.Router()
const EmployeeController = require("../controllers/EmployeeController")

router.get("/employee", EmployeeController.list)
router.post("/employee", EmployeeController.teste)
// router.get("/tarefa/:id", TaskController.buscaId)
// router.put("/tarefa/:id", TaskController.editar)
// router.delete("/tarefa/:id", TaskController.deletar)

module.exports = router