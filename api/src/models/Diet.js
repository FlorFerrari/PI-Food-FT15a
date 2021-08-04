const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('diet', {
      //el ID lo genera solo
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  });
};

//PREGUNTA:DEBO CREAR EL ATRIBUTO ID ACA TAMBIEN O NO HACE FALTA??