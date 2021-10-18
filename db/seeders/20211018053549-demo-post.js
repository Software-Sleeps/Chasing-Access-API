'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      title: "Suggestions for Shopping Centers?",
      message: "I have a 5 year old daughter in a wheelchair. My local shopping center does not have a parking lot and is always crowded. Looking for new shopping center.",
      isMobility: true,
      username: 'jsmith',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {})

  }
};
