const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Users extends Model {checkPassword(loginPw) {
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
        hooks: {
            beforeBulkCreate: async (newUserData) => {
                console.log(newUserData[0].dataValues.password);
                for (let i = 0; i < newUserData.length; i++) {
                newUserData[i].dataValues.password = await bcrypt.hash(newUserData[i].dataValues.password, 10);
                }return newUserData
            },
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Users'
    }
);

module.exports = Users;