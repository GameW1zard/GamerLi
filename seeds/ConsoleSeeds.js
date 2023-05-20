const Consoles = require('../models/Consoles.js');

const consoleData = [
  {
    console_name: 'GameBoy Micro',
    user_id: '1'
  },

  {
    console_name: 'N64',
    user_id: '2'
  }
]
const seedConsoles = () => Consoles.bulkCreate(consoleData);



module.exports = seedConsoles;


// async function seedConsoles (){
//     Consoles.create({
//         console_name: 'GameBoy Micro',
//         user_id: '1'
//       });
//     Consoles.create({
//         console_name: 'N64',
//         user_id: '2'
//       });
// }

// module.exports = seedConsoles;