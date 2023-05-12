const { Users } = require('../models');

const userData = [
  {
    user_name: 'GameW1zard',
  }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
