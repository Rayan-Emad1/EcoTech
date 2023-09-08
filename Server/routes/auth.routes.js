const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");

router.post("/check_email", authController.checkEmail)

module.exports = router;