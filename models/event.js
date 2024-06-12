// models/event.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';
import Partner from './partnership.js';
import Garden from './gardens.js';

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partnerShipId: {
    type: DataTypes.INTEGER,
    references: {
      model: Partner,
      key: 'id',
    },
  },
  gardenId: {
    type: DataTypes.INTEGER,
    references: {
      model: Garden,
      key: 'id',
    },
  },
}, {
  tableName: 'events',
  timestamps: true,
});


Event.belongsTo(Partner, { foreignKey: 'partnerShipId' });
Partner.hasMany(Event, { foreignKey: 'partnerShipId' });

Event.belongsTo(Garden, { foreignKey: 'gardenId' });
Garden.hasMany(Event, { foreignKey: 'gardenId' });

export default Event;
