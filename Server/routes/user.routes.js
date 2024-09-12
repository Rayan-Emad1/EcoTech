const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const { auth, checkRole } = require("../middlewares/auth.middleware");

router.get("/get_forests", auth, checkRole(['customer','admin']), userController.getAllForestsDetails);
router.post("/get_forest_data", userController.getForestData);

module.exports = router;
