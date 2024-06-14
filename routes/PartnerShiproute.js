import express from "express";
import * as PartnerShipcontrol from '../controller/partnershipcontrol.js';

const PartnerShiproutes = express.Router();


PartnerShiproutes.post('/events', PartnerShipcontrol.createEvent);
PartnerShiproutes.post('/register/event',PartnerShipcontrol.registerInEvent);
PartnerShiproutes.get('/gardens/available', PartnerShipcontrol.checkAvailableGarden);
PartnerShiproutes.get('/event/:EventId/volunteers/count', PartnerShipcontrol.getVolunteerCountForEvent);

export default PartnerShiproutes;