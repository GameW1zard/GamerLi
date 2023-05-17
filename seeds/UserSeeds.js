const Users = require('../models/Users.js');

const userData = {
    user_name: 'GameW1zard',
    password: 'password'
  };

const seedUsers = () => Users.create(userData);

module.exports = seedUsers;
