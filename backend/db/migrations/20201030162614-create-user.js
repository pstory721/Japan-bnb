"use strict"; 

let options = {};
options.tableName = 'Users'
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
 
  up: (queryInterface, Sequelize) => {  
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      picture: {
        type: Sequelize.STRING(256),
        allowNull: false,

      },
      phone: {
        type: Sequelize.STRING(256),
      },
      bio: {
        type: Sequelize.STRING(256),
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users",options);
  },
};
