const express = require("express");
const router = express.Router();
const controller = require("../controllers/userRole.controller");


router.post("/", controller.createUserRole); // Crear una relación usuario-rol
router.get("/", controller.getAllUserRoles); // Obtener todas las relaciones
router.delete("/:user_id/:role_id", controller.deleteUserRole); // Eliminar una relación específica

module.exports = router;
