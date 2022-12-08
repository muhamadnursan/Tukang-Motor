'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User)
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: `name is required` },
        notEmpty: { msg: `name is required` }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: `price is required` },
        notEmpty: { msg: `price is required` }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: `description is required` },
        notEmpty: { msg: `description is required` }
      }
    },
    image: {
      type: DataTypes.TEXT,

      allowNull: false,
      validate: {
        notNull: { msg: `image is required` },
        notEmpty: { msg: `image is required` }
      }
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: `brand is required` },
        notEmpty: { msg: `brand is required` }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: `UserId is required` },
        notEmpty: { msg: `UserId is required` }
      }
    },

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};