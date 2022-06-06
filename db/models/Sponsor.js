'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sponsor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Hall}) {
            // define association here
            this.belongsTo(Hall)
        }
    }

    Sponsor.init({
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
        modelName: 'Sponsor',
    });
    return Sponsor;
};