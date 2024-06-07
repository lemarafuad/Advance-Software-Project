import events from "../models/event.js";

const createevent = async(req,res)=>{
    try{
      console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Log the entire request body

      const {title, description, date, location } = req.body;
    if (!title || ! description || !date || !location){
        return res.status(400).json({message: "All fields are required" });
    }
    const  event = await events.create({title,description,date,location});
    res.status(201).send(event);
    console.log(`Add event successfully`)
} catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the event.'
    });
  }
};

const updateevent = async (req,res)=>{
    try{
      const [idupdate] = await events.update(req.body, { where: { id: req.params.id } });
      if (idupdate == 1) {
        res.send({message: 'event was updated successfully.'});
      }else {
        res.status(404).send({ message: `Cannot update event with id=${req.params.id}. event not found!` });
      }
  
    }catch(error){
      res.status(500).send({
        message: `Cannot update event with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    }
  
  };

  const getallevent= async (req,res)=>{
    try{
    const allevents= await events.findAll();
    res.status(200).send(allevents);
    }catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving events.'
      });
    }
  };

  const geteventbyid= async (req,res)=>{
    try{
    const eventid = await events.findByPk(req.params.id);
    if(eventid)
      {
        res.status(200).send(eventid);
      }
      else{
        res.status(404).send({
          message: `Cannot find event  with id=${req.params.id}.`
        });
      }
    }
    catch(error){
      res.status(500).send({
        message: error.message || 'Error retrieving event with id=' + req.params.id
      });
    }
  };

  const deleteevent= async (req,res)=> {
    try{
      const id = req.params.id;
      const iddelete = await events.destroy({ where: { id: id } });
      if (iddelete == 1) {
        res.send({message: 'event was deleted successfully.'});
    }else {
      res.status(404).send({ message: `Cannot delete event with id=${id}. event not found!` });
    }
    }
    catch(error)
    {
      res.status(500).send({
        message: `Cannot delete event with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    };
  }
    
    export {
      createevent,
      getallevent,
      updateevent,
      deleteevent,
      geteventbyid
    };







