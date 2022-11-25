'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Achievment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({School}) {
            this.belongsTo(School, {foreignKey: 'schoolId'});
        }
    }
    Achievment.init(
        {
            schoolId: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            name: DataTypes.STRING,
            level: DataTypes.STRING,
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
            modelName: 'Achievment',
        }
    );
    return Achievment;
};
