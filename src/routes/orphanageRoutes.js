const express = require("express");
const {
  getAllOrphanages,
  getOrphanageById,
  addOrphanage,
} = require("../controllers/orphanageController");

const router = express.Router();

router.get("/", getAllOrphanages);
router.get("/:id", getOrphanageById);
router.post("/", addOrphanage);

module.exports = router;