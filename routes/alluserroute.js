import express from "express";
const router = express.Router();
import * as alluserController from "../controller/allusercontroler.js";

// Profile
router.route("/:id/profile").get( alluserController.getMyProfile).put(alluserController.updateMyProfile);

// Project
router.route("/gardens").get( alluserController.showAllGardens);
router.route("/garden/:garden_id").get(alluserController.showGarden);

// // Task
// router.route("/:userId/myTasks").get( alluserController.showAllCropS) ////
// router.route("/task/:taskId").get(alluserController.showCrop)    ////

// // Skill
// router.route("/skills").get(alluserController.showAllSkills).post( alluserController.addNewSkill) 
// router.route("/:id/mySkills").get( alluserController.getMySkills) 
// router.route("/mySkill").post( alluserController.addAvailabilSkill) 
// router.route("/skill/:id").delete( alluserController.deleteSkill)

// Tool
router.route("/tools").get( alluserController.getTools).post(alluserController.addNewTool)
router.route("/sharingTools").get( alluserController.getSharingTools);
router.route("/:id/myTools").get(alluserController.getMyTools)
router.route("/myTool").post(alluserController.addTool)
router.route("/tool/:id").delete( alluserController.deleteTool).put(alluserController.updateTool)

// // Event
// router.route("/events").get(alluserController.getAllEvent)
// router.route("/event/:id").get(alluserController.ShowEvent)
// router.route("/:id/myEvents").get( alluserController.showMyEvents) 
// router.route("/register/event").post(alluserController.registerInEvent)
// router.route("/register/event/:id").delete(alluserController.deleteRegister)

export default router;