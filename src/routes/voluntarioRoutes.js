const express = require('express');
const router = express.Router();
const voluntariosController = require('../controllers/voluntarioController');

// Obtener todas las voluntarios
router.get('/', voluntarioController.getAllVoluntarios);

// Obtener voluntario por ID
router.get('/:id', voluntarioController.getVoluntarioById);

// Buscar voluntarios por nombre (POST)
router.post('/search', voluntarioController.searchVoluntarioByNombre);

// Crear una nueva voluntario
router.post('/', voluntarioController.createVoluntario);

// Actualizar una voluntario
router.put('/:id', voluntarioController.updateVoluntario);

// Eliminar una voluntario
router.delete('/:id', voluntarioController.deleteVoluntario);

module.exports = router;
