const Consoles = require('./Consoles');
const Games = require('./Games');
const Users = require('./Users');

Users.hasMany(Consoles,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Consoles.belongsTo(Users,{
    foreignKey: 'user_id'
});

Consoles.hasMany(Games,{
    foreignKey : 'console_id',
    onDelete: 'CASCADE'
});

Games.belongsTo(Consoles,{
    foreignKey: "console_id"
});

module.exports = {
    Consoles,
    Games,
    Users
};