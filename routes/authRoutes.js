const express = require("express");
const AuthController = require("../controllers/authController");
const authRoutes = express.Router();

authRoutes.post("/auth/register", AuthController.register);
authRoutes.post("/auth/login", AuthController.login);
authRoutes.post("/auth/refresh", AuthController.refresh);

module.exports = authRoutes;
