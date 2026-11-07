const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Spotify Clone API is running",
  });
});

app.use("/api", apiRoutes);

module.exports = app;