'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Event, Person}) {
            // define association here
            this.hasMany(Event, {foreignKey: 'userId', as: 'event'})
            this.hasMany(Person, {foreignKey: 'userId', as: 'person'})
        }
    }

    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: DataTypes.INTEGER,
        refreshToken: DataTypes.STRING,
        bio: DataTypes.TEXT,
        company: DataTypes.STRING,
        position: DataTypes.STRING,
        profilePhoto: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};