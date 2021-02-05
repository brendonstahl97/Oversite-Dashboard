const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  goals: [
    {
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
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
