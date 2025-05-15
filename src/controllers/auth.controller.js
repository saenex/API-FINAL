const { Auth } = require("../models");

module.exports = {
  createAuth: async (req, res) => {
    try {
      const { id, email, password } = req.body;

      const auth = await Auth.create({ id, email, password });
      res.status(201).json(auth);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAuths: async (req, res) => {
    try {
      const auths = await Auth.findAll();
      res.json(auths);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAuthById: async (req, res) => {
    try {
      const { id } = req.params;
      const auth = await Auth.findByPk(id);
      if (!auth) return res.status(404).json({ message: "Auth not found" });
      res.json(auth);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAuth: async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      const auth = await Auth.findByPk(id);
      if (!auth) return res.status(404).json({ message: "Auth not found" });

      auth.email = email || auth.email;
      auth.password = password || auth.password;
      await auth.save();

      res.json(auth);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAuth: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Auth.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ message: "Auth not found" });
      res.json({ message: "Auth deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
