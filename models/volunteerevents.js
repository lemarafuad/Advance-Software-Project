// models/volunteerevents.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';
import Volunteer from './volunteer.js';
import Event from './event.js';

const VolunteerEvents = sequelize.define('VolunteerEvents', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  VolunteerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Volunteer,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  EventId: {
    type: DataTypes.INTEGER,
    references: {
      model: Event,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'volunteer_events',
  timestamps: true,
});

VolunteerEvents.belongsTo(Volunteer, { foreignKey: 'VolunteerId' });
Volunteer.hasMany(VolunteerEvents, { foreignKey: 'VolunteerId' });

VolunteerEvents.belongsTo(Event, { foreignKey: 'EventId' });
Event.hasMany(VolunteerEvents, { foreignKey: 'EventId' });

export default VolunteerEvents;
