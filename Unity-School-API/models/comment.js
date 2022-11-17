'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({School}) {
      this.belongsTo(School, {foreignKey: 'schoolId'});
    }
  }
  Comment.init({
    schoolId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    username: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};