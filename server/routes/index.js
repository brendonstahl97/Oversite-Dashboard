const path = require("path");
const router = require("express").Router();
const authRoutes = require("./authRoutes");
const goalRoutes = require("./goalRoutes");


router.use("/api/auth", authRoutes);
router.use("/api/goals", goalRoutes);



// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;