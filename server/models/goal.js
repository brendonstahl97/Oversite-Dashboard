const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    userUuid: { type: String, required: true },
    name: { type: String, required: true },
    completionDate: { type: String, required: true },
    description: String,
    goalType: { type: String, required: true },
    consequence: { type: String, required: true },
    data: []
}
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
