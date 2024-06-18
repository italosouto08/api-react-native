const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/FitBuddy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/api/users", userRoutes);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
