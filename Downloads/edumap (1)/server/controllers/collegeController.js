const College = require("../models/collegeModel");

exports.getColleges = (req, res) => {
  College.getAllColleges((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};