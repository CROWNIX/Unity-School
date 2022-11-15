'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({school}) {
      this.belongsTo(school, {foreignKey: 'schoolId'});
    }
  }
  facility.init({
    schoolId: DataTypes.BIGINT,
    name: DataTypes.STRING,
    total: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'facility',
  });
  return facility;
};