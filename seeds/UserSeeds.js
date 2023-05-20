const Users = require('../models/Users.js');

const userData = [
  { 
    user_name: 'GameW1zard',
    password: 'password'
  },

  {
    user_name: 'user2',
    password: 'password'
  }
]

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;

// async function seedUsers (){
//     Users.create({
//         user_name: 'GameW1zard',
//         password: 'password'
//       });
//     Users.create({
//         user_name: 'user2',
//         password: 'password'
//       });
// }

// module.exports = seedUsers;