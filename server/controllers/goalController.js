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
        const { goalName, unitType, description, goalType, targetType, target, avgPeriod, completionDate, consequenceTargetContact, successMessage, failureMessage } = req.body;

        const newGoal = new db.Goal({
            goalName: goalName,
            unitType: unitType,
            description: description,
            goalType: goalType,
            targetType: targetType,
            target: target,
            avgPeriod: avgPeriod,
            completionDate: completionDate,
            consequenceTargetContact: consequenceTargetContact,
            successMessage: successMessage,
            failureMessage: failureMessage,
            goalLog: []
        });

        console.log(newGoal);
        newGoal.save((err, savedGoal) => {
            if (err) return res.json(err);
            return res.json(savedGoal);
        });
    },

    //add a Daily update to our goal Data.
    addData: (req, res) => {
        const { data } = req.body;
        console.log(data);
        return res;
    }
};