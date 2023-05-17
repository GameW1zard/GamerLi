const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Users extends Model {  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Users'
    }
);

module.exports = Users;