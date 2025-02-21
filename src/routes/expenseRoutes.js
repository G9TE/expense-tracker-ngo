const express = require("express");
const { addExpense, getExpensesByOrphanage } = require("../controllers/expenseController");

const router = express.Router();

router.post("/", addExpense);
router.get("/:orphanageId", getExpensesByOrphanage);

module.exports = router;