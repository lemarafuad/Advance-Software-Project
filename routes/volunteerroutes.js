import express from "express";
import * as volunteercontrol from '../controller/allvolunteercontrol.js';

const Volunteerroutes = express.Router();

Volunteerroutes.get('/profile/:id',volunteercontrol.volunteerProfile);
Volunteerroutes.get('/events',volunteercontrol.getAllevent);
Volunteerroutes.put('/updateprofile/:id',volunteercontrol.updatevolunteerProfile);
Volunteerroutes.post('/create',volunteercontrol.createVolunteer);
Volunteerroutes.get('/showmyevent/:VolunteerId',volunteercontrol.getEventsForVolunteer);

export default Volunteerroutes;




