import gardens from "../models/gardens.js";

const creategarden = async(req,res)=>{
    try{
      console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Log the entire request body

    const { name, admainEmail, location, area, soiltype, sunlight, available } = req.body;

    if (!name || !location || !area || !admainEmail || !soiltype || !sunlight || !available) {
      console.log('Missing fields:', { name, admainEmail, location, area, soiltype, sunlight, available });
      return res.status(400).json({ message: "All fields are required" });
    }

    const garden = await gardens.create({ name, admainEmail, location, area, soiltype, sunlight, available });
    res.status(201).send(garden);
    console.log(`Add garden successfully`)
} catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the garden.'
    });
    console.log(error.message || 'Some error occurred while creating the garden.')
  }

};

const updategarden = async (req, res) => {
  try {
    const [idupdate] = await gardens.update(req.body, { where: { id: req.params.id } });
    if (idupdate == 1) {
      res.send({ message: 'Garden was updated successfully.' });
    } else {
      res.status(404).send({ message: `Cannot update garden with id=${req.params.id}. Garden not found!` });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot update garden with id=${req.params.id}. Please check the id you provided!`,
      error: error.message
    });
  }
};

const getallgardens= async (req,res)=>{
  try{
  const allgardens= await gardens.findAll();
  res.status(200).send(allgardens);
  console.log("Done get all garden");
  }catch(error){
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving gardens.'
    });
  }
};

const getgardenbyid= async (req,res)=>{
  try{
  const gardenid = await gardens.findByPk(req.params.id);
  if(gardenid)
    {
      res.status(200).send(gardenid);
    }
    else{
      res.status(404).send({
        message: `Cannot find garden with id=${req.params.id}.`
      });
    }
  }
  catch(error){
    res.status(500).send({
      message: error.message || 'Error retrieving garden with id=' + req.params.id
    });
  }
};

const deletegarden = async (req, res) => {
  try {
    const id = req.params.id;
    const iddelete = await gardens.destroy({ where: { id: id } });
    //Checks if a row was deleted
    if (iddelete == 1) {
      res.send({ message: 'Garden was deleted successfully.' });
    } else {
      res.status(404).send({ message: `Cannot delete garden with id=${id}. Garden not found!` });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot delete garden with id=${req.params.id}. Please check the id you provided!`,
      error: error.message
    });
  }
};

export {
  creategarden,
  getallgardens,
  getgardenbyid,
  updategarden,
  deletegarden
};








