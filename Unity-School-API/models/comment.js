'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({school}) {
      this.belongsTo(school, {foreignKey: 'schoolId'});
    }
  }
  comment.init({
    schoolId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    username: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};