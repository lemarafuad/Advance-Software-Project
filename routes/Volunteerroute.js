import express from "express";
import * as volunteercontrol from '../controller/volunteereventcontrol.js';

const volunteerroutes = express.Router();

volunteerroutes.post('/addVolunteerToEvent',volunteercontrol.addVolunteerToEvent);

export default volunteerroutes;