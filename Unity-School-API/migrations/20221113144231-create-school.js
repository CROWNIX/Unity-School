'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Schools', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            name: {
                type: Sequelize.STRING,
            },
            slug: {
                type: Sequelize.STRING,
                unique: true,
            },
            description: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            logo: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            logoUrl: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
            },
            image: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            imageUrl: {
                type: Sequelize.STRING,
                defaultValue: 'default.jpg',
            },
            noTelp: {
                type: Sequelize.STRING,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
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
        await queryInterface.dropTable('Schools');
    },
};
