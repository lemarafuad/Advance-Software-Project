import * as Gardenscontrol from './Gardenscontrol.js';
import * as Cropscontrol from './Cropcontrol.js';
import * as Guidecontrol from './Guidecontrol.js';

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
    Guidecontrol.getallguide(req,res);;
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
    

};











