const Paciente = require('../models/Paciente');

// Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo paciente
exports.createPaciente = async (req, res) => {
  const { nombre, apellido, fecha_nacimiento, direccion, telefono } = req.body;

  try {
    const newPaciente = new Paciente({
      nombre,
      apellido,
      fecha_nacimiento,
      direccion,
      telefono,
    });

    const paciente = await newPaciente.save();
    res.status(201).json(paciente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
