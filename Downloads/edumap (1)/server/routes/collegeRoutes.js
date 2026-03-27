const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController");

router.get("/colleges", collegeController.getColleges);

module.exports = router;