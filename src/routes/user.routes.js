const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Rutas CRUD
router.post("/", userController.createUser);         // Crear usuario
router.get("/", userController.getAllUsers);         // Obtener todos
router.get("/:id", userController.getUserById);      // Obtener por ID
router.put("/:id", userController.updateUser);       // Actualizar
router.delete("/:id", userController.deleteUser);    // Eliminar

module.exports = router;
