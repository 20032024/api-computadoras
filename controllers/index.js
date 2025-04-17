const models = require('../database/models');

// Crear una computadora
const createComputers = async (req, res) => {
  try {
    const computer = await models.Computer.create(req.body);
    return res.status(201).json({ computer });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obtener todas las computadoras
const getAllComputers = async (req, res) => {
  console.log('getting computers');
  try {
    const computers = await models.Computer.findAll();
    return res.status(200).json({ computers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createComputers,
  getAllComputers
};
