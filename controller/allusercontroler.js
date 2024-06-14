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
// Show all tools
const getTools = (req, res)=> {
  getAllTools(req, res);
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



export {showAllGardens,showGarden,showCrop,showAllCropS,addResource,showAllResources, updateMyProfile, getMyProfile ,getsharingresources
,getMyresource,addresource,addNewresource,deleteresource,updateresource

};