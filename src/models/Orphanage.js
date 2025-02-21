const mongoose = require("mongoose");

const orphanageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  visitDate: { type: Date, default: Date.now },
  itemsTaken: [{ type: String }], // Bonus: List of items taken
});

module.exports = mongoose.model("Orphanage", orphanageSchema);