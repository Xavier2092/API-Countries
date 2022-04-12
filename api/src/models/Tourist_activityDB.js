const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourist_activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nameActivity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    season: { //type: DataTypes.ENUM('active', 'injured', 'retired')
      type: DataTypes.ENUM('summer', 'winter', 'spring', 'autumn'),
      allowNull: false,
    }
  });
};