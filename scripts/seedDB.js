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
        password: "password"
    },
    {
        userId: "DinoDuck44",
        email: "DinoDuck44@gmail.com",
        password: "password"
    },
    {
        userId: "MegaDog88",
        email: "MegaDog88@gmail.com",
        password: "password"
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
