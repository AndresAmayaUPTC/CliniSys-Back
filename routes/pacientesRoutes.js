const express = require('express');
const router = express.Router();
const { getPacientes, createPaciente } = require('../controllers/pacientesController');

// Rutas para pacientes
router.get('/', getPacientes);
router.post('/', createPaciente);

module.exports = router;
