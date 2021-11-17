'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [

        {
          spotId:1,
          image_url:"https://www.japan-guide.com/thumb/XYZeXYZe2158_1680b.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }


      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});

  }
};
