'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comments.belongsTo(models.Posts, {foreignKey: 'postId'})
      Comments.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Comments.init({
    message: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
        }
      },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Comments',
  }, {timestamps: true});
  return Comments;
};