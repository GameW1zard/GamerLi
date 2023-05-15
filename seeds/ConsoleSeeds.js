const Consoles = require('../models/Consoles.js');

const consoleData = {
    console_name: 'GameBoy Micro',
    user_id: '1'
  };

const seedConsoles = () => Consoles.create(consoleData);

module.exports = seedConsoles;