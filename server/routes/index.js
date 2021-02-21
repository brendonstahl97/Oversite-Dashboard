const path = require("path");
const router = require("express").Router();
const authRoutes = require("./authRoutes");
const goalRoutes = require("./goalRoutes");


router.use("/api/auth", authRoutes);
router.post("/api/goals", goalController.create);
router.post("/api/goals/update", goalController.addData);
router.get("/api/goals/list/:_id", goalController.listGoals);


// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;