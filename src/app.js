const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const orphanageRoutes = require("./routes/orphanageRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const errorHandler = require("./utils/errorHandler");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orphanages", orphanageRoutes);
app.use("/api/expenses", expenseRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;