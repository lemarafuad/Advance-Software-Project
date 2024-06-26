import express from "express";
import AdminRoutes from "./Adminroute.js";
import AuthRoutes from "./Authroute.js";
import weatherRoutes from './weatherRoutes.js';
import AllUserRoutes from './alluserroute.js';
import PartneShipRoutes from "./PartnerShiproute.js";
import volunteerRoutes from "./volunteerroutes.js"
import {authenticate,checkAdminRole,checkUserRole} from '../middleware/authentication.js';
const router = express.Router();

router.use("/auth",AuthRoutes);
router.use("/admin", AdminRoutes,authenticate,checkAdminRole);
router.use("/volunteer",volunteerRoutes);
router.use("/partnership",PartneShipRoutes);
router.use("/api",weatherRoutes);
router.use("/user",AllUserRoutes,authenticate,checkUserRole);

export default router;