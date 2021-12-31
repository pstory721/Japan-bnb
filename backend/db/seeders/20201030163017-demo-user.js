"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",
          bio:"I am a multi home owner in the Tokyo area ready to welcome you to one of our amazing spots, feel free to contact me via email or phone number.",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser4",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser5",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },

        {
          email: faker.internet.email(),
          username: "FakeUser6",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "Joe",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser8",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser9",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },

        {
          email: faker.internet.email(),
          username: "FakeUser10",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser11",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser12",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser13",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser14",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser15",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser16",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser17",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser18",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser19",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser20",
          picture:
            "https://res.cloudinary.com/dveuedvvm/image/upload/v1640131411/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA_e8yfkz.jpg",
          phone: "3145660507",

          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
