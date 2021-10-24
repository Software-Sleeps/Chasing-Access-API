'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Posts', [
            {
                title: "Suggestions for Shopping Centers?",
                message: "I have a 5 year old daughter in a wheelchair. My local shopping center does not have a parking lot and is always crowded. Looking for new shopping center.",
                isMobility: true,
                isAuditory: false,
                isVision: false,
                isNeurological: false,
                username: 'jsmith',
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Recommendations for Hearing Device?",
                message: "Need a new hearing device, what are some trusted brands that y'all use? ",
                isMobility: false,
                isAuditory: true,
                isVision: false,
                isNeurological: false,
                username: 'example1',
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Looking for someone to help for daily task",
                message: "I have Parkinson's, and I am looking to hire someone for chores such as computer typing, cooking, etc. Where or what agency can I look for to find someone?  ",
                isMobility: true,
                isAuditory: false,
                isVision: false,
                isNeurological: false,
                username: 'example1',
                categoryId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "What are some beauty products that have braille packaging?",
                message: "I have a family member that is visually impaired and I am looking for a beauty product that has braille on packaging.",
                isMobility: false,
                isAuditory: false,
                isVision: true,
                isNeurological: false,
                username: 'example1',
                categoryId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Train stations with reliable elevator services in NYC",
                message: "I am in the NYC area and a lot of the areas have elevators that are out of order or do not have it at all. What are some train stations that have these?",
                isMobility: true,
                isAuditory: false,
                isVision: false,
                isNeurological: false,
                username: 'example1',
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Does anyone know if Uber or Lyft is cheaper?",
                message: "I constantly use these services to travel with my disabled grandmother. I use the wheelchair accessibility option, does anyone know which is cheaper? Or if there is a cheaper option out there?",
                isMobility: true,
                isAuditory: false,
                isVision: false,
                isNeurological: false,
                username: 'lina',
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Five Star Restaurants with Accessible Entrances",
                message: "It's my birthday and I am looking for a five star restaurant in NYC that has a wheelchair accessible entrance.",
                isMobility: true,
                isAuditory: false,
                isVision: false,
                isNeurological: false,
                username: 'dlo',
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Family Therapist Recommendations?",
                message: "I am looking for a family therapist that can help my family better communicate with me after my recent hearing loss.",
                isMobility: false,
                isAuditory: true,
                isVision: false,
                isNeurological: false,
                username: 'lina',
                categoryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Posts', null, {})

    }
};
