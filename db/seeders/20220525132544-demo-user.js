'use strict';
const {faker} = require('@faker-js/faker')
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        const items = generateFakerItems(10)
        await queryInterface.bulkInsert(
            "Users", items, {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         *
         */
        await queryInterface.bulkDelete('People', null, {});
    }
};

function generateFakerItems(rowCount) {
    const data = [];
    for (let i = 0; i < rowCount; i++) {
        const newItem = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: 123456
        }
        data.push(newItem)
    }
    return data
}
