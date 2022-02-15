const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://i.ibb.co/0yPjkHP/food-Default.jpg",
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
      },
      healthScore: {
        type: DataTypes.INTEGER,
      },
      stepByStep: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue("stepByStep"));
        },
        set: function (value) {
          return this.setDataValue("stepByStep", JSON.stringify(value));
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
