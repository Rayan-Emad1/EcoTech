const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const { auth, checkRole } = require("../middlewares/auth.middleware");

router.get("/get_forests", auth, checkRole(['customer']), userController.getAllForestsDetails);

module.exports = router;
