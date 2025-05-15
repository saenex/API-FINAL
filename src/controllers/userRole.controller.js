const { UserRole } = require("../models");

module.exports = {
  createUserRole: async (req, res) => {
    try {
      const { user_id, role_id } = req.body;
      const userRole = await UserRole.create({ user_id, role_id });
      res.status(201).json(userRole);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllUserRoles: async (req, res) => {
    try {
      const userRoles = await UserRole.findAll();
      res.status(200).json(userRoles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUserRole: async (req, res) => {
    try {
      const { user_id, role_id } = req.params;
      const deleted = await UserRole.destroy({
        where: { user_id, role_id }
      });
      if (!deleted) {
        return res.status(404).json({ message: "Relación no encontrada" });
      }
      res.json({ message: "Relación eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
