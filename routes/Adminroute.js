import express from "express";
import * as admincontrol from '../controller/Admincontrol.js';

const Adminroutes = express.Router();

// For Gardens 
Adminroutes.post('/gardens',admincontrol.Admaincreategarden);
Adminroutes.get('/gardens',admincontrol.Admaingetgarden);
Adminroutes.put('/gardens/:id',admincontrol.Admainupdategarden);
Adminroutes.get('/gardens/:id',admincontrol.Admaingetgardenbyid);
Adminroutes.delete('/gardens/:id',admincontrol.Admaindeletegarden);

//For Crops
Adminroutes.post('/crops',admincontrol.Admaincreatecrop);
Adminroutes.get('/crops',admincontrol.Admaingetcrop);
Adminroutes.put('/crops/:id',admincontrol.Admainupdatecrop);
Adminroutes.get('/crops/:id',admincontrol.Admaingetcropbyid);
Adminroutes.delete('/crops/:id',admincontrol.Admaindeletecrop);

//For Guide
Adminroutes.post('/guides',admincontrol.Admaincreateguide);
Adminroutes.get('/guides',admincontrol.Admaingetguide);
Adminroutes.put('/guides/:id',admincontrol.Admainupdateguide);
Adminroutes.get('/guides/:id',admincontrol.Admaingetguidebyid);
Adminroutes.delete('/guides/:id',admincontrol.Admaindeleteguide);

//For Resource
Adminroutes.post('/resources',admincontrol.Admaincreateresource);
Adminroutes.get('/resources',admincontrol.Admaingetresource);
Adminroutes.put('/resources/:id',admincontrol.Admainupdateresource);
Adminroutes.get('/resources/:id',admincontrol.Admaingetresourcebyid);
Adminroutes.delete('/resources/:id',admincontrol.Admaindeleteresource);

//For Events
Adminroutes.post('/events',admincontrol.Admaincreateevent);
Adminroutes.get('/events',admincontrol.Admaingetevent);
Adminroutes.put('/events/:id',admincontrol.Admainupdateevent);
Adminroutes.get('/events/:id',admincontrol.Admaingeteventbyid);
Adminroutes.delete('/events/:id',admincontrol.Admaindeleteevent);

//For Volunteer  
Adminroutes.post('/volunteers',admincontrol.Admaincreatevolunteer);
Adminroutes.get('/volunteers',admincontrol.Admaingetvolunteer);
Adminroutes.put('/volunteers/:id',admincontrol.Admainupdatevolunteer);
Adminroutes.get('/volunteers/:id',admincontrol.Admaingetvolunteerbyid);
Adminroutes.delete('/volunteers/:id',admincontrol.Admaindeletevolunteer);

export default Adminroutes;
