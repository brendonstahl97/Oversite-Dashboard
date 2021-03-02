const { Goal } = require("../models");
const db = require("../models");

// Defining methods for the Goals Controller
module.exports = {
    listGoals: async (req, res, next) => {
        console.log(req.params);
        let goalList = await Goal.find({ userId: req.params._id });
        res.json(goalList);
    },
    create: (req, res) => {
        console.log(req.body);
        const { userId, goalName, unitType, description, goalType, targetType, target, avgPeriod, completionDate, consequenceTargetContact, successMessage, failureMessage } = req.body;

        const newGoal = new db.Goal({
            userId: userId,
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
    addData: async (req, res) => {
        const { goalIndex, goalDate, goalData } = req.body;

        const goalDoc = await Goal.findById(req.params._id);

        if (goalDoc.goalLog.length > 0) {
            const latestDate = goalDoc.goalLog[goalDoc.goalLog.length - 1].goalDate;
            if (latestDate != new Date().toLocaleDateString("en-US")) {
                goalDoc.goalLog.push({data: goalData, date: goalDate});
            };
        } else {
            goalDoc.goalLog.push({data: goalData, date: goalDate});
        }

        goalDoc.save((err, savedGoal) => {
            if (err) return res.json(err);
            return res.json(savedGoal);
        });
    }
};