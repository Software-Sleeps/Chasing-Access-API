'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Users.hasMany(models.Posts, {foreignKey: 'userId'})
            Users.hasMany(models.Comments, {foreignKey: 'userId'})
        }
    };
    Users.init({
        email: DataTypes.STRING,
        username: {type: DataTypes.STRING(30), allowNull: false, unique: true},
        password: {type: DataTypes.STRING, allowNull: false, unique: true}
    }, {
        sequelize,
        modelName: 'User',
    }, {timestamps: true});
    return Users;
};