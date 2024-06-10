import express from "express";
import AdminRoutes from "./Adminroute.js";
import AuthRoutes from "./Authroute.js";
import VolunteerRoutes from "./Volunteerroute.js";
import weatherRoutes from './weatherRoutes.js';
import {authenticate,checkAdminRole} from '../middleware/authentication.js';
const router = express.Router();

router.use("/admin", AdminRoutes,authenticate,checkAdminRole);
router.use("/volunteer",VolunteerRoutes,authenticate);
router.use("/api",weatherRoutes);
router.use("/auth",AuthRoutes);

export default router;

