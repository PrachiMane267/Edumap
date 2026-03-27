const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const collegeRoutes = require("./routes/collegeRoutes");
app.use("/api", collegeRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});