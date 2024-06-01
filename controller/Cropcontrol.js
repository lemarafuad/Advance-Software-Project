import crops from "../models/crop.js";

const createcrop = async(req,res)=>{
    try{
      console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Log the entire request body

      const { name, PlantingMonths, TimeToGrow, IrrigateCrops } = req.body;
    if (!name || ! PlantingMonths || !TimeToGrow || !IrrigateCrops){
        return res.status(400).json({message: "All fields are required" });
    }
    const crop = await crops.create({name,PlantingMonths,TimeToGrow,IrrigateCrops});
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
      const [idupdate] = await crops.update(req.body, { where: { id: req.params.id } });
      if (idupdate == 1) {
        res.send({message: 'crop was updated successfully.'});
      }else {
        res.status(404).send({ message: `Cannot update crop with id=${req.params.id}. crop not found!` });
      }
  
    }catch(error){
      res.status(500).send({
        message: `Cannot update crop with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
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

  const getcropbyid= async (req,res)=>{
    try{
    const cropid = await crops.findByPk(req.params.id);
    if(cropid)
      {
        res.status(200).send(cropid);
      }
      else{
        res.status(404).send({
          message: `Cannot find crop  with id=${req.params.id}.`
        });
      }
    }
    catch(error){
      res.status(500).send({
        message: error.message || 'Error retrieving crop with id=' + req.params.id
      });
    }
  };

  const deletecrop= async (req,res)=> {
    try{
      const id = req.params.id;
      const iddelete = await crops.destroy({ where: { id: id } });
      if (iddelete == 1) {
        res.send({message: 'crop was deleted successfully.'});
    }else {
      res.status(404).send({ message: `Cannot delete crop with id=${id}. crop not found!` });
    }
    }
    catch(error)
    {
      res.status(500).send({
        message: `Cannot delete crop with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    };
  }
    
    export {
      createcrop,
      getallcrops,
      updatecrop,
      deletecrop,
      getcropbyid
    };







