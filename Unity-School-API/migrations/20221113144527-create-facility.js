'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Facilities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            schoolId: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
            },
            total: {
                type: Sequelize.INTEGER,
            },
            image: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            imageUrl: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Facilities');
    },
};
