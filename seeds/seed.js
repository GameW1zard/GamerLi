const seedusers = require('./UserSeeds.js');
const seedConsoles = require('./ConsoleSeeds.js');
const seedGames = require('./GameSeeds.js');

const sequelize = require('../config/connection.js');


async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedusers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedConsoles();
    console.log('\n----- CONSOLES SEEDED -----\n');
    await seedGames();
    console.log('\n----- GAMES SEEDED -----\n');
}

seedAll();