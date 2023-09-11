const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const { checkRole } = require("../middlewares/auth.middleware");

module.exports = router;
