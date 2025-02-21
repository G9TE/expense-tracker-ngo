const Orphanage = require("../models/Orphanage");

// Get all orphanages
exports.getAllOrphanages = async (req, res) => {
  try {
    const orphanages = await Orphanage.find();
    res.status(200).json(orphanages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get details of a single orphanage
exports.getOrphanageById = async (req, res) => {
  try {
    const orphanage = await Orphanage.findById(req.params.id);
    if (!orphanage) {
      return res.status(404).json({ message: "Orphanage not found" });
    }
    res.status(200).json(orphanage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new orphanage
exports.addOrphanage = async (req, res) => {
  try {
    const { name, location, itemsTaken } = req.body;
    const orphanage = new Orphanage({ name, location, itemsTaken });
    await orphanage.save();
    res.status(201).json({ message: "Orphanage added successfully", orphanage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};