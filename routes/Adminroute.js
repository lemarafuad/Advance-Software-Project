import express from "express";
import * as admincontrol from '../controller/Admincontrol.js';

const Adminroutes = express.Router();

Adminroutes.post('/gardens',admincontrol.Admaincreategarden);

