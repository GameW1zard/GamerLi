const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Consoles extends Model {}

Consoles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        console_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestaps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Consoles'
    }
)