const express = require("express");
const router = express.Router();
const forestController = require("../controllers/forest.controllers");
const { auth, checkRole } = require("../middlewares/auth.middleware");


router.post("/create_forest", forestController.createForest);
router.post("/update-forest-data", forestController.updateForestData);

module.exports = router;
