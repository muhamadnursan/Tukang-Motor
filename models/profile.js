'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init({
    fullName: {
      type: DataTypes.STRING,
    allowNull: false,
  validate: {
    notNull: {msg: `FullName is required`},
    notEmpty: {msg: `FullName is required`}
  }},
    address: {
      type: DataTypes.TEXT,
    allowNull: false,
  validate: {
    notNull: {msg: `address is required`},
    notEmpty: {msg: `address is required`}
  }},
    phone: {
      type: DataTypes.STRING,
    allowNull: false,
  validate: {
    notNull: {msg: `phone is required`},
    notEmpty: {msg: `phone is required`}
  }},
    image: {
      type: DataTypes.TEXT,
    allowNull: false,
  validate: {
    notNull: {msg: `image is required`},
    notEmpty: {msg: `image is required`}
  }},
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};