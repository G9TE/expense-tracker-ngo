const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URL;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));