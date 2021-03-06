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
      Posts.belongsTo(models.Categories, {foreignKey: 'categoryId'})
      Posts.belongsTo(models.User, {foreignKey: 'username'})
      Posts.hasMany(models.Comments, {foreignKey: 'postId'})
    }
  };
  Posts.init({
    title: {type: DataTypes.STRING, allowNull: false},
    message: DataTypes.STRING,
    isAuditory: {type: DataTypes.BOOLEAN, defaultValue: false},
    isVision: {type: DataTypes.BOOLEAN, defaultValue: false},
    isMobility: {type: DataTypes.BOOLEAN, defaultValue: false},
    isNeurological: {type: DataTypes.BOOLEAN, defaultValue: false},
    username: {
      type: DataTypes.STRING,
      references: {
        model: 'User',
        key: 'username'
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