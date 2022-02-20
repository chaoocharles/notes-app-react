const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/notes", noteRoutes);

/*
Create => POST
Read => GET
Update => PUT
Delete => DELETE
*/

app.get("/", (req, res) => {
  res.send("Welcome to our notes api...");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}...`));

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log("Error:", error.message));
