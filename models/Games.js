const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Games extends Model {}

Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        purchase_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal:true
            }
        },
        console_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'console',
                key: 'id'
            }
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
        modelName: 'Games'
    }
)