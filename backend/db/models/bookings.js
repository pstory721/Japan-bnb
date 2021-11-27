'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model:"Spots"}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model:"Users"}
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
  Booking.belongsTo(models.Spot, {foreignKey:"spotId" })
  };
  return Booking;
};
