'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comments', [{
            message: 'roosevelt field mall is a good start',
            username: 'jsmith',
            postId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {})
    }
};
