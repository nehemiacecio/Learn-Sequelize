'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Events', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
            eventName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            companyName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING
            },
            type: Sequelize.STRING,
            status: Sequelize.STRING,
            startDateTime: Sequelize.DATE,
            endDateTime: Sequelize.DATE,
            customLinkForVisitor: Sequelize.STRING,
            thumbnailImage: Sequelize.STRING,
            companyImage: Sequelize.STRING,
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
        await queryInterface.dropTable('Events');
    }
};