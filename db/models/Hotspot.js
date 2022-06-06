'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hotspot extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Booth}) {
            // define association here
            this.belongsTo(Booth)
        }
    }

    Hotspot.init({
        boothId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'booth',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        urlLink: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Hotspot',
    });
    return Hotspot;
};