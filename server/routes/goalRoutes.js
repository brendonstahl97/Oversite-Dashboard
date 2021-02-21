const router = require('express').Router();
const goalController = require('../controllers/goalController');

router.post("/", goalController.create);
router.post("/update", goalController.addData);
router.post("/list/:_id", goalController.listGoals);

module.exports = router;
