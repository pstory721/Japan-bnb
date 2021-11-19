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
          image_url:"https://www.japan-guide.com/thumb/XYZeXYZe2158_1680b.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
        }



      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Spots', null, {});

  }
};
