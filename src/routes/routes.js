const express = require('express')
const router = express.Router()

// controllers
const DepartamentoController = require('../controller/departamentocontroller')
const { validarDepartamento } = require('../validators/departamentoValidador')




// Departamentos

router.get('/departamentos', DepartamentoController.buscarTodos);
router.get('/departamentos/:id', DepartamentoController.buscarPorID);
router.post('/departments', departmentController.create);
router.put('/departamentos/:id', validarDepartamento, DepartamentoController.atualizar);
router.delete('/departamentos/:id', DepartamentoController.excluir);










module.exports = DepartamentoController