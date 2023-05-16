const Consoles = require('./Consoles');
const Games = require('./Games');
const Users = require('./Users');

Users.hasMany(Consoles,{
    foreingKey: 'user_id',
    onDelete: 'CASCADE'
});

Consoles.belongsTo(Users,{
    foreingKey: 'user_id'
});

Consoles.hasMany(Games,{
    foreingKey : 'console_id',
    onDelete: 'CASCADE'
});

Games.belongsTo(Consoles,{
    foreingKey: "console_id"
});

module.exports = {
    Consoles,
    Games,
    Users
};