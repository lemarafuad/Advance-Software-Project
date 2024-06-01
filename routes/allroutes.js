import express from "express";
import AdminRoutes from "./Adminroute.js";
import AuthRoutes from "./Authroute.js";
import {authenticate,checkAdminRole} from '../middleware/authentication.js';
const router = express.Router();

router.use("/admin", AdminRoutes,authenticate,checkAdminRole);
router.use("/auth",AuthRoutes);


export default router;

