'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hotspot', {
            // Model attributes are defined here
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            boothId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'booth',
                    key: 'id'
                }
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: Sequelize.STRING,
            urlLink: Sequelize.STRING,
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
        await queryInterface.dropTable('Hotspots');
    }
};