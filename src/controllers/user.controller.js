const { User } = require("../models");

// Crear usuario
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario", details: error.message });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios", details: error.message });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario", details: error.message });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const user = await User.findByPk(req.params.id);
      return res.status(200).json(user);
    }

    res.status(404).json({ error: "Usuario no encontrado para actualizar" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario", details: error.message });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      return res.status(200).json({ message: "Usuario eliminado correctamente" });
    }

    res.status(404).json({ error: "Usuario no encontrado para eliminar" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario", details: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
