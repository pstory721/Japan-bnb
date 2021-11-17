'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bookings', [

        {
        spotId:1,
        userId:1,
        start_date:new Date(),
        end_date:new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        }


      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Bookings', null, {});

  }
};
