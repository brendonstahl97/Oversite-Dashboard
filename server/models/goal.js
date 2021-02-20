const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    userId: {type: String, required: true},
    goalName: { type: String, required: true },
    unitType: { type: String, required: true },
    goalType: { type: String, required: true },
    targetType: { type: String, required: true },
    target: { type: Number, required: true },
    avgPeriod: { type: String, required: true },
    completionDate: { type: String, required: true },
    consequenceTargetContact: { type: String, required: true },
    successMessage: { type: String, required: true },
    failureMessage: { type: String, required: true },
    goalLog: [],
}
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
