'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [
            {
                category: 'Public Places',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category: 'Mental Health',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category: 'Transportation',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category: 'Equipment/Devices',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category: 'Services',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {})
    }
};
