'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            username: {
                type: Sequelize.STRING,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            imageUrl: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            isVerified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            accessToken: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Users');
    },
};
