const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");

router.post("/check_email", authController.checkEmail)
router.post("/register_user", authController.registerUser)
router.post("/verify", authController.verify)
router.post("/login", authController.login)

module.exports = router;