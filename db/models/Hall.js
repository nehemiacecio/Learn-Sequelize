'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hall extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Event, Booth, Sponsor}) {
            // define association here
            this.belongsTo(Event)
            this.hasMany(Booth, {foreignKey: 'hallId', as: 'booth'})
            this.hasMany(Sponsor, {foreignKey: 'hallId', as: 'sponsor'})
        }
    }

    Hall.init({
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'event',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        eventPromo: DataTypes.STRING,
        urlLink: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Hall',
    });
    return Hall;
};