'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [
        {
          userId:1,
          address: "testing 1232 lane",
          city:"kyoto",
          lat:null,
          lng:null,
          name:'test',
          price:300,
          createdAt: new Date(),
          updatedAt: new Date(),
        }



      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Spots', null, {});

  }
};
