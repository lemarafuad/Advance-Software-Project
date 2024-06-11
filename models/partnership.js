import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';

const Partner = sequelize.define('Partner', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactInfo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'partners',
  timestamps: true,
});

/*Partner.associate = function(models) {
  Partner.hasMany(models.Event, { foreignKey: 'partnerId' });
};*/

export default Partner;
