const Games = require('../models/Games.js');

const GameData = [
  {
    game_name: 'super mario advance 4 super mario bros 3',
    purchase_price: '17.99',
    console_id: '1',
    user_id: '1'
  },
  {
    game_name: 'Turok',
    purchase_price: '5.99',
    console_id: '2',
    user_id: '2'
  }
]



const seedGames = () => Games.bulkCreate(GameData);

module.exports = seedGames;

// async function seedGames (){
//     Games.create({
//         game_name: 'super mario advance 4 super mario bros 3',
//         purchase_price: '17.99',
//         console_id: '1',
//         user_id: '1'
//       });
//     Games.create({
//         game_name: 'Turok',
//         purchase_price: '5.99',
//         console_id: '2',
//         user_id: '2'
//       });
// }

// module.exports = seedGames;