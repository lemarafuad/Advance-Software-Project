// models/volunteerevents.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';

const VolunteerEvents = sequelize.define('VolunteerEvents', {
  VolunteerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'volunteers', // exact table name for Volunteer model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  EventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'events', // exact table name for Event model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'volunteer_events',
  timestamps: true,
});

export default VolunteerEvents;
