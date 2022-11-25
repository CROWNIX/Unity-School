'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Activity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({School}) {
            this.belongsTo(School, {foreignKey: 'schoolId'});
        }
    }
    Activity.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.BIGINT,
            },
            schoolId: DataTypes.BIGINT,
            name: DataTypes.STRING,
            image: {
                type: DataTypes.STRING,
                defaultValue: 'default.jpg',
            },
            imageUrl: {
                type: DataTypes.STRING,
                defaultValue: 'default.jpg',
            },
        },
        {
            sequelize,
            modelName: 'Activity',
        }
    );
    return Activity;
};
