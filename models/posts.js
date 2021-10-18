'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Posts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Posts.belongsTo(models.Categories, {foreignKey: 'categoryId'});
            Posts.belongsTo(models.User, {foreignKey: 'userId'})
            Posts.hasMany(models.Comments, {foreignKey: 'postId'})
        }
    };
    Posts.init({
        title: {type: DataTypes.STRING, required: true},
        message: {type: DataTypes.STRING},
        isAuditory: {type: DataTypes.BOOLEAN, default: false},
        isVision: {type: DataTypes.BOOLEAN, default: false},
        isMobility: {type: DataTypes.BOOLEAN, default: false},
        isNeurological: {type: DataTypes.BOOLEAN, default: false},
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Posts',
    }, {timestamps: true});
    return Posts;
};