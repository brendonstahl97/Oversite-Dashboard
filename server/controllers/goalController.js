const db = require("../models");

// Defining methods for the Goals Controller
module.exports = {
    getGoal: (req, res, next) => {
        console.log('===== goal!!======');
        console.log(req.goal);
        if (req.goal) {
            return res.json({ goal: req.goal });
        } else {
            return res.json({ goal: null });
        }
    },
    create: (req, res) => {
        const { userUuid, name, goalType, completionDate, data } = req.body;
        console.log(req.body);
        console.log(req);

        const newGoal = new db.Goal({
            userUuid,
            name,
            goalType,
            completionDate,
            data,
        });

        console.log(newGoal);
        newGoal.save((err, savedGoal) => {
            if (err) return res.json(err);
            return res.json(savedGoal);
        });
    }
};