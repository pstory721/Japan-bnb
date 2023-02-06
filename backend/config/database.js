const config = require('./index');

const db = config.db;
const username = "pstory";
const password = "bleachnaruto7";
const database = "japanbnb";
const host = "localhost";

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    define: {         
      schema: process.env.SCHEMA
    },
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
