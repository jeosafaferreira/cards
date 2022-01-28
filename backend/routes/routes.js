const connection = require("../database/connection")
const express = require("express")
const router = express.Router()
const EmployeeController = require("../controllers/EmployeeController")

router.get("/employee", EmployeeController.list)
router.post("/employee", EmployeeController.save)
router.get("/employee/:chave", EmployeeController.search)
// router.put("/tarefa/:id", TaskController.editar) 
// router.delete("/tarefa/:id", TaskController.deletar)

module.exports = router