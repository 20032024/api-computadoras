'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Computer.init({
    nameCorporation: DataTypes.STRING,
    versionSoftware: DataTypes.STRING,
    nameComputer: DataTypes.STRING,
    processor: DataTypes.STRING,
    portatil: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Computer',
  });
  return Computer;
};
