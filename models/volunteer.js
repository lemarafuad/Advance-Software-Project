// models/volunteer.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';

const Volunteer = sequelize.define('Volunteer', {
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
    //unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  availability: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'volunteers',
  timestamps: true,
});


export default Volunteer;
