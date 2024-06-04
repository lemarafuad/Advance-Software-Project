import resource from "../models/resource.js";

const createresource = async(req,res)=>{
    try{
      console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Log the entire request body

      const {type, name, quantity} = req.body;
    if (!type || ! name || !quantity){
        return res.status(400).json({message: "All fields are required" });
    }
    const reso = await resource.create({type,name,quantity});
    res.status(201).send(reso);
    console.log(`Add resource successfully`)
} catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the resource.'
    });
  }
};

const updateresource = async (req,res)=>{
    try{
      const [idupdate] = await resource.update(req.body, { where: { id: req.params.id } });
      if (idupdate == 1) {
        res.send({message: 'resource was updated successfully.'});
      }else {
        res.status(404).send({ message: `Cannot update resource with id=${req.params.id}. resource not found!` });
      }
  
    }catch(error){
      res.status(500).send({
        message: `Cannot update resource with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    }
  
  };

  const getallresource= async (req,res)=>{
    try{
    const allreso= await resource.findAll();
    res.status(200).send(allreso);
    }catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving resource.'
      });
    }
  };

  const getresourcebyid= async (req,res)=>{
    try{
    const resourceid = await resource.findByPk(req.params.id);
    if(resourceid)
      {
        res.status(200).send(resourceid);
      }
      else{
        res.status(404).send({
          message: `Cannot find resource with id=${req.params.id}.`
        });
      }
    }
    catch(error){
      res.status(500).send({
        message: error.message || 'Error retrieving resource with id=' + req.params.id
      });
    }
  };

  const deleteresource= async (req,res)=> {
    try{
      const id = req.params.id;
      const iddelete = await resource.destroy({ where: { id: id } });
      if (iddelete == 1) {
        res.send({message: 'resource was deleted successfully.'});
    }else {
      res.status(404).send({ message: `Cannot delete resource with id=${id}. resource not found!` });
    }
    }
    catch(error)
    {
      res.status(500).send({
        message: `Cannot delete resource with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    };
  }
  
    export {
      createresource,
      getallresource,
      updateresource,
      deleteresource,
      getresourcebyid
    };