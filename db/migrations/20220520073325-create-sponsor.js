'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('sponsor', {
            // Model attributes are defined here
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hallId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hall',
                    key: 'id'
                }
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            logoBanner: Sequelize.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Sponsors');
    }
};