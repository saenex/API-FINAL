const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/", authController.createAuth);
router.get("/", authController.getAuths);
router.get("/:id", authController.getAuthById);
router.put("/:id", authController.updateAuth);
router.delete("/:id", authController.deleteAuth);

module.exports = router;
