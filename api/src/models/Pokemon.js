const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => {
        const characters = '0123456789';
        let id = 'X';
        for (let i = 0; i < 4; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          id += characters.charAt(randomIndex);
        }
        return id;
      },
    },


    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    speed: {
      type: DataTypes.INTEGER,

    },
    height: {
      type: DataTypes.INTEGER,

    },
    weight: {
      type: DataTypes.INTEGER,

    }
  },{timestamps:false});
};

