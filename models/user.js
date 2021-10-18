'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Posts, {foreignKey: 'userId'})
            User.hasMany(models.Comments, {foreignKey: 'userId'})
        }
    };
    User.init({
        email: DataTypes.STRING,
        username: {type: DataTypes.STRING(30), required: true, unique: true},
        password: {type: DataTypes.STRING, required: true}
    }, {
        sequelize,
        modelName: 'User',
    }, {timestamps: true});
    return User;
};