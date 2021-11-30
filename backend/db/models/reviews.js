'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      refrences: {model:"Users"}
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      refrences: {model:"Users"}
    },
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model:"Spots"}
    },
    review: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey:"userId" })
    Review.belongsTo(models.Spot, {foreignKey:"spotId" })
  };
  return Review;
};
