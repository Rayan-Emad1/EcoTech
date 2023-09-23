const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const { auth } = require("../middlewares/auth.middleware");

router.post("/check_email", authController.checkEmail);
router.post("/register_user", authController.registerUser);
router.post("/verify", authController.verify);
router.post("/login", authController.login);
router.put("/update", auth, authController.updateUser);

module.exports = router;
