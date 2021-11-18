'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          userId:1,
          spotId:1,
          review:"absolutely Stunning",
          createdAt: new Date(),
          updatedAt: new Date(),
        }


      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
