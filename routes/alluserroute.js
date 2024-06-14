import express from "express";
const router = express.Router();
import * as alluserController from "../controller/allusercontroler.js";

// Profile
router.route("/:id/profile").get( alluserController.getMyProfile).put(alluserController.updateMyProfile);

//gardens
router.route("/gardens").get( alluserController.showAllGardens);
router.route("/garden/:id").get(alluserController.showGarden);

//crops
router.route("/crops").get( alluserController.showAllCropS);
router.route("/crop/:id").get(alluserController.showCrop);

// resource
router.route("/resources").get( alluserController.showAllResources);
router.route("/sharingresources").get( alluserController.getsharingresources);
router.route("/:id/myresources").get(alluserController.getMyresource);
router.route("/myresource").post(alluserController.addresource);



export default router;