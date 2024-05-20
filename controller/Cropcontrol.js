import crops from "../models/crop";

const createcrop = async(req,res)=>{
    try{
    const{name , PlantingMonths,TimeToGrow }=req.boady;
    if (!name || ! PlantingMonths || !TimeToGrow){
        return res.status(400).json({ message: "crop name can't be empty!"  });
    }
    const crop = await crops.create({name,PlantingMonths,TimeToGrow});
    res.status(201).send(crop);
    console.log(`Add crop successfully`)
} catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the crop.'
    });
  }
};


const updatecrop = async (req,res)=>{
    try{
      const idupdate = await crops.update(req.boady,{ where : {id : req.params.id}});
      if (idupdate == 1) {
        res.send({message: 'crop was updated successfully.'});
      }
  
    }catch(error){
      res.send({
        message: `Cannot update crop with id=${req.params.id}. please check the id you write !`});
    }
  
  };

  const getallcrops= async (req,res)=>{
    try{
    const allcrops= await crops.findAll();
    res.status(200).send(allcrops);
    }catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving crops.'
      });
    }
  };

  const deletecrop= async (req,res)=> {
    try{
      const iddelete = await crops.destroy(req.boady,{ where : {id : req.params.id}});
      if (iddelete == 1) {
        res.send({message: 'crop was deleted successfully.'});
    }
    }
    catch(error)
    {
      res.send({
        message: `Cannot delete crop with id=${req.params.id}. please check the id you write !`});
    }
    };
    
    export {
      createcrop,
      getallcrops,
      updatecrop,
      deletecrop
    };







