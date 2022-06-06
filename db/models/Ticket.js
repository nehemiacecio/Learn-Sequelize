'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ticket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Event}) {
            // define association here
            this.belongsTo(Event)
        }
    }

    Ticket.init({
        eventId: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'Events',
                    schema: 'schema'
                },
                key: 'id',
            },
            allowNull: false,
        },
        tier: DataTypes.STRING,
        ticketFee: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Ticket',
    });
    return Ticket;
};