const { Goal } = require("../models");
const db = require("../models");

// Defining methods for the Goals Controller
module.exports = {
    listGoals: (req, res, next) => {
        console.log(req);
        let { _id } = req.body.data
        let goalList = Goal.find({ _id: _id });
        console.log(goalList);
        res.json(goalList);

        // if (req.goal) {
        //     return res.json({ goal});
        // } else {
        //     return res.json({ goal: null });
        // }
    },
    create: (req, res) => {
        console.log(req.body);
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