const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/oversite",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const userSeed = [
  {
    firstName: "Brendon",
    lastName: "Stahl",
    userId: "brendonstahl97",
    email: "brendonstahl97@gmail.com",
    password: "12345"
  }
];
