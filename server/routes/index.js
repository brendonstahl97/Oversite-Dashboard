const path = require("path");
const router = require("express").Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/'))
});


// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;