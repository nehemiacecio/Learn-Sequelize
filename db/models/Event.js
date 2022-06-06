'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({User, Ticket, Person, Hall,CategoryEvent}) {
            // define association here
            this.belongsTo(User)
            this.hasMany(Ticket, {foreignKey: 'eventId', as: 'ticket'})
            this.hasMany(Person, {foreignKey: 'eventId', as: 'person'})
            this.hasMany(Hall,{foreignKey:'eventId', as:'hall'})
            this.hasMany(CategoryEvent,{foreignKey:'eventId', as:'category-event'})
        }
    }

    Event.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'Users',
                    schema: 'schema'
                },
                key: 'id',
            },
            allowNull: false,
        },
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        type: DataTypes.STRING,
        status: DataTypes.STRING,
        startDateTime: DataTypes.DATE,
        endDateTime: DataTypes.DATE,
        customLinkForVisitor: DataTypes.STRING,
        thumbnailImage: DataTypes.STRING,
        companyImage: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Event',
    });
    return Event;
};