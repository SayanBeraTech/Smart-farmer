const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Farmer Backend Running 🚀");
});

const farmerRoutes = require("./routes/farmer");
app.use("/api/farmer", farmerRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});