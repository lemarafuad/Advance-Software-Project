import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js'; 

const gardens = sequelize.define('Gardens', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admainEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /// weather and climate 
},
{
  tableName: 'Gardens',
});

export default gardens;