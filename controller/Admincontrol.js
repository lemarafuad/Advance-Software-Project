import * as Gardenscontrol from './Gardenscontrol.js';
import * as Cropscontrol from './Cropcontrol.js';
import * as Guidecontrol from './Guidecontrol.js';
import * as Resourcecontrol from './Resourcecontrol.js';
import * as Eventcontrol from './Eventcontrol.js';
import * as Volunteercontrol from './Volunteercontrol.js';
import * as PartnerShipcontrol from './partnershipcontrol.js';

// For Gardens
const Admaincreategarden= (req,res)=>{
    Gardenscontrol.creategarden(req,res);
};
const Admainupdategarden= (req,res)=>{
    Gardenscontrol.updategarden(req,res);
};
const Admaindeletegarden= (req,res)=>{
    Gardenscontrol.deletegarden(req,res);
};
const Admaingetgardenbyid= (req,res)=>{
    Gardenscontrol.getgardenbyid(req,res);
};
const Admaingetgarden= (req,res)=>{
    Gardenscontrol.getallgardens(req,res);
};

//For Crops
const Admaincreatecrop= (req,res)=>{
    Cropscontrol.createcrop(req,res);
};
const Admainupdatecrop= (req,res)=>{
    Cropscontrol.updatecrop(req,res);
};
const Admaindeletecrop= (req,res)=>{
    Cropscontrol.deletecrop(req,res);
};
const Admaingetcropbyid= (req,res)=>{
    Cropscontrol.getcropbyid(req,res);
};
const Admaingetcrop= (req,res)=>{
    Cropscontrol.getallcrops(req,res);;
};

//For Guide
const Admaincreateguide= (req,res)=>{
    Guidecontrol.createguide(req,res);
};
const Admainupdateguide= (req,res)=>{
    Guidecontrol.updateguide(req,res);
};
const Admaindeleteguide= (req,res)=>{
    Guidecontrol.deleteguide(req,res);
};
const Admaingetguidebyid= (req,res)=>{
    Guidecontrol.getguidebyid(req,res);
};
const Admaingetguide= (req,res)=>{
    Guidecontrol.getallguide(req,res);
};
const AdmaingetCategory= (req,res)=>{
    Guidecontrol.getGuidesByCategory(req,res);
};

//For Resources
const Admaincreateresource= (req,res)=>{
    Resourcecontrol.createresource(req,res);
};
const Admainupdateresource= (req,res)=>{
    Resourcecontrol.updateresource(req,res);
};
const Admaindeleteresource= (req,res)=>{
    Resourcecontrol.deleteresource(req,res);
};
const Admaingetresourcebyid= (req,res)=>{
    Resourcecontrol.getresourceById(req,res);
};
const Admaingetresource= (req,res)=>{
    Resourcecontrol.getAllresources(req,res);;
};

//For Event
const Admaincreateevent= (req,res)=>{
    Eventcontrol.createevent(req,res);
};
const Admainupdateevent= (req,res)=>{
    Eventcontrol.updateevent(req,res);
};
const Admaindeleteevent= (req,res)=>{
    Eventcontrol.deleteevent(req,res);
};
const Admaingeteventbyid= (req,res)=>{
    Eventcontrol.geteventbyid(req,res);
};
const Admaingetevent= (req,res)=>{
    Eventcontrol.getallevent(req,res);
};

// For Volunteer
const Admaincreatevolunteer= (req,res)=>{
    Volunteercontrol.createvolunteer(req,res);
};
const Admainupdatevolunteer= (req,res)=>{
    Volunteercontrol.updatevolunteer(req,res);
};
const Admaindeletevolunteer= (req,res)=>{
    Volunteercontrol.deletevolunteer(req,res);
};
const Admaingetvolunteerbyid= (req,res)=>{
    Volunteercontrol.getvolunteerbyid(req,res);
};
const Admaingetvolunteer= (req,res)=>{
    Volunteercontrol.getallvolunteer(req,res);
};

//For PartnerShip
const AdmaincreatePartnerShip= (req,res)=>{
    PartnerShipcontrol.createPartner(req,res);
};
const AdmainupdatePartnerShip= (req,res)=>{
    PartnerShipcontrol.updatePartner(req,res);
};
const AdmaindeletePartnerShip= (req,res)=>{
    PartnerShipcontrol.deletePartner(req,res);
};
const AdmaingetPartnerShipbyid= (req,res)=>{
    PartnerShipcontrol.getPartnerById(req,res);
};
const AdmaingetPartnerShip= (req,res)=>{
    PartnerShipcontrol.getPartners(req,res);
};

export {
    //For Garden
    Admaincreategarden,
    Admainupdategarden,
    Admaindeletegarden,
    Admaingetgarden,
    Admaingetgardenbyid,
    // For Crop
    Admaincreatecrop,
    Admainupdatecrop,
    Admaindeletecrop,
    Admaingetcrop,
    Admaingetcropbyid,
    //For Guide
    Admaincreateguide,
    Admainupdateguide,
    Admaindeleteguide,
    Admaingetguide,
    Admaingetguidebyid,
    AdmaingetCategory,
    // For Crop
    Admaincreateresource,
    Admainupdateresource,
    Admaindeleteresource,
    Admaingetresource,
    Admaingetresourcebyid,
    //For Event
    Admaincreateevent,
    Admainupdateevent,
    Admaindeleteevent,
    Admaingetevent,
    Admaingeteventbyid,
    //For Volunteer
    Admaincreatevolunteer,
    Admainupdatevolunteer,
    Admaindeletevolunteer,
    Admaingetvolunteer,
    Admaingetvolunteerbyid,
    //For  PartnerShip
    AdmaincreatePartnerShip,
    AdmainupdatePartnerShip,
    AdmaindeletePartnerShip,
    AdmaingetPartnerShip,
    AdmaingetPartnerShipbyid,



};











