const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'dogs', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type:DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      height: { //altura
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: { //weight
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};

// Español 
// ID, Imagen, Nombre, Altura, Peso, AñosDeVida
