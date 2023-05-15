const Games = require('../models/Games.js');

const GameData = {
    game_name: 'super mario advance 4 super mario bros 3',
    purchase_price: '17.99',
    console_id: '1',
    user_id: '1'
  };

const seedGames = () => Games.create(GameData);

module.exports = seedGames;