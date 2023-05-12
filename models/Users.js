const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultvalue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestaps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Users'
    }
)