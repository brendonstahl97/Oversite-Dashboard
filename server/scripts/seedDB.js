const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/oversite",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const userSeed = [
    {
        userId: "brendonstahl97",
        email: "brendonstahl97@gmail.com",
        password: "password",
        goals: [
            {
              name: "Stop Smoking",
              goalType: "Reduction",
              completionDate: "01-10-2021",
              data: [
                {
                  value: 3,
                  date: "01-2-2021"
                }
              ] 
            }
          ]
    },
    {
        userId: "DinoDuck44",
        email: "DinoDuck44@gmail.com",
        password: "password",
        goals: [
            {
              name: "Exercise More",
              goalType: "Increase",
              completionDate: "01-25-2021",
              data: [
                {
                  value: 1,
                  date: "01-2-2021"
                },
                {
                    value: 0,
                    date: "01-3-2021"
                  }
              ] 
            }
          ]
    },
    {
        userId: "MegaDog88",
        email: "MegaDog88@gmail.com",
        password: "password",
        goals: [
            {
              name: "Study Longer",
              goalType: "Increase",
              completionDate: "01-15-2021",
              data: [
                {
                  value: 15,
                  date: "01-2-2021"
                },
                {
                    value: 20,
                    date: "01-3-2021"
                  }
              ] 
            }
          ]
    },

];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
