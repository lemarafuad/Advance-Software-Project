import volunteers from "../models/volunteer.js";
const createvolunteer = async(req,res)=>{
    try{
      console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Log the entire request body

      const {name, email, phone,availability } = req.body;
    if (!name || ! email || !phone || !availability){
        return res.status(400).json({message: "All fields are required" });
    }
    const  volunteer = await volunteers.create({name,email,phone,availability});
    res.status(201).send(volunteer);
    console.log(`Add volunteer successfully`)
} catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the volunteer.'
    });
  }
};

const updatevolunteer = async (req,res)=>{
    try{
      const [idupdate] = await volunteers.update(req.body, { where: { id: req.params.id } });
      if (idupdate == 1) {
        res.send({message: 'volunteer was updated successfully.'});
      }else {
        res.status(404).send({ message: `Cannot update volunteer with id=${req.params.id}. volunteer not found!` });
      }
  
    }catch(error){
      res.status(500).send({
        message: `Cannot update volunteer with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    }
  
  };
// make  get all available 
  const getallvolunteer= async (req,res)=>{
    try{
    const allvolunteers= await volunteers.findAll();
    res.status(200).send(allvolunteers);
    }catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving volunteers.'
      });
    }
  };

  const getvolunteerbyid= async (req,res)=>{
    try{
    const volunteerid = await volunteers.findByPk(req.params.id);
    if(volunteerid)
      {
        res.status(200).send(volunteerid);
      }
      else{
        res.status(404).send({
          message: `Cannot find volunteer  with id=${req.params.id}.`
        });
      }
    }
    catch(error){
      res.status(500).send({
        message: error.message || 'Error retrieving volunteer with id=' + req.params.id
      });
    }
  };

  const deletevolunteer= async (req,res)=> {
    try{
      const id = req.params.id;
      const iddelete = await volunteers.destroy({ where: { id: id } });
      if (iddelete == 1) {
        res.send({message: 'volunteer was deleted successfully.'});
    }else {
      res.status(404).send({ message: `Cannot delete volunteer with id=${id}. volunteer not found!` });
    }
    }
    catch(error)
    {
      res.status(500).send({
        message: `Cannot delete volunteer with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    };
  }
    
    export {
      createvolunteer,
      getallvolunteer,
      updatevolunteer,
      deletevolunteer,
      getvolunteerbyid
    };







