const seedusers = require('./userSeeds.js');

const sequelize = require('../config/connection.js');


async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedusers();
    console.log('\n----- USERS SEEDED -----\n');
}

seedAll();