import {getvolunteerbyid,updatevolunteer,createvolunteer} from './Volunteercontrol.js';
import {getallevent} from './Eventcontrol.js';
import VolunteerEvents from '../models/volunteerevents.js';
import Event from '../models/event.js';

const volunteerProfile = (req, res) => {
    getvolunteerbyid(req, res);
  };
  
  const updatevolunteerProfile = (req, res) => {
    updatevolunteer(req, res);
  };

  const createVolunteer = (req, res) => {
    createvolunteer(req, res);
  };
  
  const getAllevent = (req, res) => {
   getallevent(req, res);
  };

  
const getEventsForVolunteer = async (req, res) => {
    try {
      const { VolunteerId } = req.params;
      
      const volunteerEvents = await VolunteerEvents.findAll({
        where: { VolunteerId },
        include: [{
          model: Event,
          attributes: ['id', 'title', 'description', 'date', 'location']
        }]
      });
      
      if (volunteerEvents.length === 0) {
        return res.status(404).json({ error: 'No events found for this volunteer' });
      }
      
      res.status(200).json(volunteerEvents);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  export{
    getEventsForVolunteer,
    volunteerProfile,
    updatevolunteerProfile,
    createVolunteer,
    getAllevent
  }
  


