'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comments', [
            {
                message: 'staten island mall is a good start',
                username: 'sel',
                postId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                message: 'TaskRabbit and Thumbtack are good sites to search for someone',
                username: 'dlo',
                postId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                message: 'Only a few brands have catered to visually impaired consumers. Some of these brand are Dr. Jart, Whamisa and Bioderma',
                username: 'dlo',
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {})
    }
};
