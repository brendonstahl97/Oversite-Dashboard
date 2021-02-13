const db = require("../models");
const { v4: uuidv4 } = require('uuid');

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {

    const { firstName, lastName, userId, username, password, uuid } = req.body;
    // console.log(username);

    // ADD VALIDATION
    db.User.findOne({ 'email': username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the email: ${username}`
        });
      }

      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'userId': userId,
        'email': username,
        'password': password,
        'uuid': uuidv4(),
      });

      // console.log(newUser);
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function (req, res, next) {
    console.log(req.body);
    console.log('================');
    next();
  },
  authenticate: (req, res) => {
    console.log('POST to /login');
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      console.log(`Deleting ${cleanUser.password}`);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  }
};