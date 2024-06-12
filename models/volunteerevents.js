// models/volunteerevents.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';
import Volunteer from './volunteer.js';
import Event from './event.js';

const VolunteerEvents = sequelize.define('VolunteerEvents', {
  VolunteerId: {
    type: DataTypes.INTEGER,
   // primaryKey: true,
    references: {
      model: Volunteer, // exact table name for Volunteer model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  EventId: {
    type: DataTypes.INTEGER,
  //  primaryKey: true,
    references: {
      model: Event, // exact table name for Event model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'volunteer_events',
  timestamps: true,
});

VolunteerEvents.belongsTo(Volunteer, { foreignKey: 'VolunteerId', as: 'VolunteerDetails' });
Volunteer.hasMany(VolunteerEvents, { foreignKey: 'VolunteerId', as: 'VolunteerEventList' });

VolunteerEvents.belongsTo(Event, { foreignKey: 'EventId', as: 'EventDetails' });
Event.hasMany(VolunteerEvents, { foreignKey: 'EventId', as: 'EventVolunteerList' });
/*VolunteerEvents.belongsTo(Volunteer, { foreignKey: 'VolunteerId' });
Volunteer.hasMany(VolunteerEvents, { foreignKey: 'VolunteerId' });

VolunteerEvents.belongsTo(Event, { foreignKey: 'EventId' });
Event.hasMany(VolunteerEvents, { foreignKey: 'EventId' });*/

export default VolunteerEvents;
