const db = require("../config/db");

exports.getAllColleges = (callback) => {
  db.query("SELECT * FROM colleges", callback);
};