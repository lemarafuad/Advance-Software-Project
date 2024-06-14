import {getUserById, updateUser} from './usercontroller.js'
import {getallgardens, getgardenbyid} from './Gardenscontrol.js'
import {getallcrops, getcropbyid} from './Cropcontrol.js'
import {createresource, getAllresources, getresourceById} from './Resourcecontrol.js'
import {createUserresourceRelation, showSharingresources,updateUserresource,deleteUserresourceRelation} from './userresourcescontrol.js'


const getMyProfile = (req, res) => {
  getUserById(req, res);
};

const updateMyProfile = (req, res) => {
  updateUser(req, res);
}

const showAllGardens = (req, res) => {
    getallgardens(req, res);
}

const showGarden = (req, res) => {
    getgardenbyid(req, res);
}

const showAllCropS = (req, res)=>{
    getallcrops(req, res);
}

const showCrop = (req, res) => {
    getcropbyid(req, res);
}


const showAllResources = (req, res)=> {
  getAllresources(req, res);
}

const addResource = (req, res)=> {
  //resources(req, res);
}

// Show sharing resources
const getsharingresources = (req, res) =>{
  showSharingresources(req, res);
}

// Show my resources (from user_resource relation)
const getMyresource = (req, res)=> {
  getresourceById(req, res);
}

// Add resource to my profile (user_resource relation)
const addresource = (req, res) => {
  createUserresourceRelation(req, res);
}

//Add new resource to resource table
const addNewresource = (req, res) => {
  createresource(req, res);
}

// Update resource ( in user_resource relation)
const updateresource = (req, res) => {
  updateUserresource(req, res);
}

// Delete resource from my profile (user-resource relation)
const deleteresource = (req, res) => {
  deleteUserresourceRelation(req, res);
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

export {showAllGardens,showGarden,showCrop,showAllCropS,addResource,showAllResources, updateMyProfile, getMyProfile ,getsharingresources
,getMyresource,addresource,addNewresource,deleteresource,updateresource

};