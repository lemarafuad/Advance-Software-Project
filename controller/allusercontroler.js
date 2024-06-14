import {getUserById, updateUser} from './usercontroller.js'
import {getallgardens, getgardenbyid} from './Gardenscontrol.js'
import {getallcrops, getcropbyid} from './Cropcontrol.js'
import {createTool, getAllTools} from './Resourcecontrol.js'
import {createUserToolRelation, updateUserTool, geToolsForUserByUserId, deleteUserToolRelation, showSharingTools} from './userresourcescontrol.js'


// Show my profile.
const getMyProfile = (req, res) => {
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



export {showAllGardens,deleteTool, updateTool,showGarden,showCrop,showAllCropS,
  addNewTool, addTool, getMyTools, getTools, updateMyProfile, getMyProfile , getSharingTools
 };