const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    userUuid: String,
    name: { type: String, required: true },
    completionDate: String,
    description: String,
    goalType: String,
    consequence: String,
    data: []
}
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
