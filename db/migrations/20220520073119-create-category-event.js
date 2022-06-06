'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('category-event', {
            // Model attributes are defined here
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'category',
                    key: 'id'
                }
            },
            eventId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Events',
                    key: 'id'
                }
            },
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
        await queryInterface.dropTable('CategoryEvents');
    }
};