const express = require("express");
const router = express.Router();
const forestController = require("../controllers/forest.controllers");
const { checkRole } = require("../middlewares/auth.middleware");


router.post("/create_forest", checkRole(['admin']), forestController.createForest);
router.post("/update-forest-data", forestController.updateForestData);

module.exports = router;
