import Partner from '../models/partnership.js';
import models from '../models/index.js';

const createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);
    res.status(201).json(partner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPartners = async (req, res) => {
  try {
    const partners = await Partner.findAll();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (partner) {
      res.status(200).json(partner);
    } else {
      res.status(404).json({ error: 'Partner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (partner) {
      await partner.update(req.body);
      res.status(200).json(partner);
    } else {
      res.status(404).json({ error: 'Partner not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (partner) {
      await partner.destroy();
      res.status(200).json({ message: 'Partner deleted' });
    } else {
      res.status(404).json({ error: 'Partner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    const availableGarden = await models.Garden.findOne({ where: { location, available: true } });
    if (!availableGarden) {
      return res.status(400).json({ error: 'No available garden at the specified location' });
    }

    const event = await models.Event.create({ title, description, date, location });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerInEvent = async (req, res) => {
  try {
    const { VolunteerId, EventId } = req.body;
    const volunteerEvent = await models.VolunteerEvents.create({ VolunteerId: VolunteerId, EventId:EventId });
    res.status(201).json(volunteerEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const checkAvailableGarden = async (req, res) => {
  try {
    const gardens = await models.Garden.findAll({ where: { available: true } });
    res.status(200).json(gardens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



export{
    createPartner,
    getPartners,
    getPartnerById,
    updatePartner,
    deletePartner,
    createEvent,
    registerInEvent,
    checkAvailableGarden
};