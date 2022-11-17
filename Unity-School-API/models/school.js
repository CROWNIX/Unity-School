'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Achievment, Activity, Facility, Comment}) {
      this.hasMany(Achievment, {foreignKey: 'schoolId', as: 'achievments'});
      this.hasMany(Activity, {foreignKey: 'schoolId', as: 'activities'});
      this.hasMany(Facility, {foreignKey: 'schoolId', as: 'facilities'});
      this.hasMany(Comment, {foreignKey: 'schoolId', as: 'comments'});
    }
  }
  School.init({
    name: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    logo: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    image: DataTypes.STRING,
    noTelp: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};