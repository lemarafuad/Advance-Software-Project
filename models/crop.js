import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js'; 

const crops = sequelize.define('Crops', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PlantingMonths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TimeToGrow: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IrrigateCrops: {
    type: DataTypes.STRING,
    allowNull: false,
  },//add advice from farmers (make table for advice)
},
{
  tableName: 'Crops',
});

export default crops;