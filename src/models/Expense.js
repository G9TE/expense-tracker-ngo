const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  orphanage: { type: mongoose.Schema.Types.ObjectId, ref: "Orphanage", required: true },
  amount: { type: Number, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Expense", expenseSchema);