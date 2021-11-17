'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      refrences: {model:"Spots"}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      refrences: {model:"users"}
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,

    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {});
  Booking.associate = function(models) {
  Booking.belongsTo(models.User, {foreignKey:"userId" })
  Booking.belongsTo(models.User, {foreignKey:"spotId" })
  };
  return Booking;
};
