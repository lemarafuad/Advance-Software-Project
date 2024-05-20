import gardens from "../models/gardens";

const creategarden = async(req,res)=>{
    try{
    const{name ,location,area,admainEmail }=req.boady;
    if (!name || ! location || !area || !admainEmail){
        return res.status(400).json({ message: "garden name can't be empty!"  });
    }
    const garden = await gardens.create({name,location,area,admainEmail});
    res.status(201).send(garden);
    console.log(`Add garden successfully`)
} catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the garden.'
    });
    console.log(error.message || 'Some error occurred while creating the garden.')
  }

};

const updategarden = async (req,res)=>{
  try{
    const idupdate = await gardens.update(req.boady,{ where : {id : req.params.id}});
    if (idupdate == 1) {
      res.send({message: 'garden was updated successfully.'});
    }

  }catch(error){
    res.send({
      message: `Cannot update garden with id=${req.params.id}. please check the id you write !`});
  }

};

const getallgardens= async (req,res)=>{
  try{
  const allgardens= await gardens.findAll();
  res.status(200).send(allgardens);
  }catch(error){
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving gardens.'
    });
  }
};

const deletegarden= async (req,res)=> {
try{
  const iddelete = await gardens.destroy(req.boady,{ where : {id : req.params.id}});
  if (iddelete == 1) {
    res.send({message: 'garden was deleted successfully.'});
}
}
catch(error)
{
  res.send({
    message: `Cannot delete garden with id=${req.params.id}. please check the id you write !`});
}
};

export {
  creategarden,
  getallgardens,
  updategarden,
  deletegarden
};








