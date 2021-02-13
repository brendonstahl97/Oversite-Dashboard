const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    userUuid: String,
    name: { type: String, required: true },
    goalType: String,
    completionDate: String,
    data: [
        {
            value: Number,
            date: String
        }
    ]
}
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
