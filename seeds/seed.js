const sequelize = require('../config/connection');
const { GameLi } = require('../models');

const gameLiData = require('./gameLiData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await GameLi.bulkCreate(gameLiData, {
        individualHooks: true,
        returning: true,
    });
    
    process.exit(0);
}

seedDatabase();
