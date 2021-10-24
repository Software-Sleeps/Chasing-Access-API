'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('Users', [
            {
                email: 'jane-smith@gmail.com',
                username: 'jsmith',
                password: '123456',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'dl@gmail.com',
                username: 'dlo',
                password: 'password1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'example1@gmail.com',
                username: 'example1',
                password: 'example1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'sel@gmail.com',
                username: 'sel',
                password: 'sel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'lina@gmail.com',
                username: 'lina',
                password: 'lina',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        return queryInterface.bulkDelete('Users', null, {})
    }
};
