'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class school extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({achievment, activity, facility, comment}) {
      this.hasMany(achievment, {foreignKey: 'schoolId', as: 'achievments'});
      this.hasMany(activity, {foreignKey: 'schoolId', as: 'activities'});
      this.hasMany(facility, {foreignKey: 'schoolId', as: 'facilities'});
      this.hasMany(comment, {foreignKey: 'schoolId', as: 'comments'});
    }
  }
  school.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'school',
  });
  return school;
};