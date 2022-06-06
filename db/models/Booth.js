'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booth extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Hall, Hotspot}) {
            // define association here
            this.belongsTo(Hall)
            this.hasMany(Hotspot, {foreignKey: 'boothId', as: 'hotspot'})
        }
    }

    Booth.init({
        hallId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'hall',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logoBanner: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Booth',
    });
    return Booth;
};