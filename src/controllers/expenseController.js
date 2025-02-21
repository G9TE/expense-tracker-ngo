const Expense = require("../models/Expense");
const Orphanage = require("../models/Orphanage");

// Add a new expense for an orphanage
exports.addExpense = async (req, res) => {
  try {
    const { orphanageId, amount, description } = req.body;

    // Check if the orphanage exists
    const orphanage = await Orphanage.findById(orphanageId);
    if (!orphanage) {
      return res.status(404).json({ message: "Orphanage not found" });
    }

    // Create a new expense
    const expense = new Expense({ orphanage: orphanageId, amount, description });
    await expense.save();

    res.status(201).json({ message: "Expense added successfully", expense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all expenses for an orphanage
exports.getExpensesByOrphanage = async (req, res) => {
  try {
    const expenses = await Expense.find({ orphanage: req.params.orphanageId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};