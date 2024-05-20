import * as Gardenscontrol from './Gardenscontrol';


const Admaincreategarden= (req,res)=>{
    Gardenscontrol.creategarden(req,res);
};

const Admainupdategarden= (req,res)=>{
    Gardenscontrol.updategarden(req,res);
};

const Admaindeletegarden= (req,res)=>{
    Gardenscontrol.deletegarden(req,res);
};

const Admaingetgarden= (req,res)=>{
    Gardenscontrol.getallgardens(req,res);
};












