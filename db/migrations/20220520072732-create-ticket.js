'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ticket', {
            // Model attributes are defined here
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            eventId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Events',
                    key: 'id'
                }
            },
            tier: Sequelize.STRING,
            ticketFee: Sequelize.STRING,
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
        await queryInterface.dropTable('Tickets');
    }
};