import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';

const Volunteer = sequelize.define('volunteer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    tableName: 'volunteer',
  });

export default Volunteer ;