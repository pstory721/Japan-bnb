'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model:"Spots"}
    },
    imageurl: {
      allowNull: false,
      type: DataTypes.STRING
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
  Image.associate = function(models) {
    Image.belongsTo(models.Spot, {foreignKey:"spotId" })
  };
  return Image;
};
