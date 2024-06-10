// controllers/volunteerController.js

import Volunteer from '../models/volunteer.js';
import Event from '../models/event.js';
import VolunteerEvents from '../models/volunteerevents.js';

 const addVolunteerToEvent = async (req, res) => {
  const { VolunteerId, EventId } = req.body;

  try {
    // Check if the volunteer and event exist
    const volunteer = await Volunteer.findByPk(VolunteerId);
    const event = await Event.findByPk(EventId);

    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Create the association
    await VolunteerEvents.create({ VolunteerId: VolunteerId, EventId: EventId });

    return res.status(200).json({ message: 'Volunteer added to event successfully' });
  } catch (error) {
    console.error('Error adding volunteer to event:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


export {
    addVolunteerToEvent
  };
