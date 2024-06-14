import express from "express";
import AdminRoutes from "./Adminroute.js";
import AuthRoutes from "./Authroute.js";
import weatherRoutes from './weatherRoutes.js';
import AllUserRoutes from './alluserroute.js';
import PartneShipRoutes from "./PartnerShiproute.js";
//dcf35af922b8700700bcc16e32665fae57ae3362
import {authenticate,checkAdminRole} from '../middleware/authentication.js';
const router = express.Router();

router.use("/auth",AuthRoutes);
router.use("/admin", AdminRoutes,authenticate,checkAdminRole);
//router.use("/volunteer",VolunteerRoutes,authenticate);
router.use("/partnership",PartneShipRoutes);
router.use("/api",weatherRoutes);
router.use("/user",AllUserRoutes);

export default router;

