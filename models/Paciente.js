const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fecha_nacimiento: { type: Date, required: true },
  direccion: { type: String },
  telefono: { type: String },
});

module.exports = mongoose.model('Paciente', PacienteSchema);
