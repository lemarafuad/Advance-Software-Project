
import sequelize from '../database/seq.js';
import Gardens from './gardens.js';
import Users from './user.js';
import Crops from './crop.js';
import Guide from './guide.js';
import Resource from './resource.js';
import Volunteer from './volunteer.js';
import Event from './event.js';
import PartneShip from './partnership.js';
import VolunteerEvents from './volunteerevents.js';

const models = {
    Volunteer,
    Event,
    VolunteerEvents,
  };
  
  // Apply associations
  Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });
/*Event.belongsToMany(Volunteer, { through: VolunteerEvents});
Volunteer.belongsToMany(Event, { through: VolunteerEvents });*/

export {Gardens,Crops,Users,Guide,Resource, Volunteer,Event,VolunteerEvents,PartneShip,sequelize};
export default models;