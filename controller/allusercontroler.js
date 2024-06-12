import {getUserById, updateUser} from './usercontroller.js'
import {getallgardens, getgardenbyid} from './Gardenscontrol.js'
import {getallcrops, getcropbyid} from './Cropcontrol.js'
import {createTool, getAllTools} from './Resourcecontrol.js'
import {createUserToolRelation, updateUserTool, geToolsForUserByUserId, deleteUserToolRelation, showSharingTools} from './userresourcescontrol.js'


// Show my profile.
const getMyProfile = (req, res) => {
  //req.params.id = req.params.id;
  getUserById(req, res);
};

// Update my profile.
const updateMyProfile = (req, res) => {
  updateUser(req, res);
}

// Show all Gardens.
const showAllGardens = (req, res) => {
    getallgardens(req, res);
}

// Show specific garden
const showGarden = (req, res) => {
    getgardenbyid(req, res);
}

// Show all crop
const showAllCropS = (req, res)=>{
    getallcrops(req, res);
}

// Show specific crop
const showCrop = (req, res) => {
    getcropbyid(req, res);
}
// Show all tools
const getTools = (req, res)=> {
  getAllTools(req, res);
}

// Show sharing tools
const getSharingTools = (req, res) =>{
  showSharingTools(req, res);
}

// Show my tools (from user_tool relation)
const getMyTools = (req, res)=> {
  geToolsForUserByUserId(req, res);
}

// Add tool to my profile (user_tool relation)
const addTool = (req, res) => {
  createUserToolRelation(req, res);
}

// Add new tool to tool table
const addNewTool = (req, res) => {
  createTool(req, res);
}

// Update tool ( in user_tool relation)
const updateTool = (req, res) => {
  updateUserTool(req, res);
}

// Delete tool from my profile (user-tool relation)
const deleteTool = (req, res) => {
  deleteUserToolRelation(req, res);
}

// // Show All events
// const getAllEvent = (req, res) => {
//   getAllEvents(req, res);
// }

// // Show specific event 
// const ShowEvent = (req, res) => {
//   getEventById(req,res);
// }

// // Show all event im registered in (user-event relatiom)
// const showMyEvents = (req, res) => {
//   getEventsByUserId(req, res)
// }

// // Register in specific event (create user_event relation)
// const registerInEvent = (req, res) => {
//   createUserEventRelation(req, res);
// }

// // Delete register in specfic event (delete user-event relation )
// const deleteRegister = (req, res) => {
//   deleteUserEventRelation(req, res);
// }

export {showAllGardens,deleteTool, updateTool,showGarden,showCrop,showAllCropS,
  addNewTool, addTool, getMyTools, getTools, updateMyProfile, getMyProfile , getSharingTools
 };