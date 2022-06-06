'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CategoryEvent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Event, Category}) {
            // define association here
            Event.belongsToMany(Category, {through: 'category-event'})
            Category.belongsToMany(Event, {through: 'category-event'})
        }
    }

    CategoryEvent.init({
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'event',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'CategoryEvent',
    });
    return CategoryEvent;
};