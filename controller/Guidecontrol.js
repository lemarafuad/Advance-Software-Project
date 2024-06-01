import guide from '../models/guide.js';

const createguide = async(req,res)=>{
  try {

    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body); // Log the entire request body

    const { title, content, author, category } = req.body;
    if (!title || !content || !author || !category) {
        console.log('Missing fields:', { title, content,author, category});
        return res.status(400).json({ message: "All fields are required" });
      }
    const newGuide = await guide.create({ title, content, author, category });
    res.status(201).send(newGuide);
    console.log(`Add guide successfully`)
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the guide.'
    });
  }
};

const getallguide= async (req,res)=>{
  try {
    const allguides = await guide.findAll();
    res.status(200).send(allguides);
    console.log("Done get all guide");
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving guides.'
    });
  }
};

const getguidebyid= async (req,res)=>{
    try{
    const guideid = await guide.findByPk(req.params.id);
    if(guideid)
      {
        res.status(200).send(guideid);
      }
      else{
        res.status(404).send({
          message: `Cannot find guide with id=${req.params.id}.`
        });
      }
    }
    catch(error){
      res.status(500).send({
        message: error.message || 'Error retrieving guide with id=' + req.params.id
      });
    }
  };
  

const updateguide = async (req, res) => {
    try {
      const [idupdate] = await guide.update(req.body, { where: { id: req.params.id } });
      if (idupdate == 1) {
        res.send({ message: 'Guide was updated successfully.' });
      } else {
        res.status(404).send({ message: `Cannot update guide with id=${req.params.id}. Guide not found!` });
      }
    } catch (error) {
      res.status(500).send({
        message: `Cannot update guide with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    }
  };

const deleteguide = async (req, res) => {
    try {
      const id = req.params.id;
      const iddelete = await guide.destroy({ where: { id: id } });
      //Checks if a row was deleted
      if (iddelete == 1) {
        res.send({ message: 'Guide was deleted successfully.' });
      } else {
        res.status(404).send({ message: `Cannot delete guide with id=${id}. Guide not found!` });
      }
    } catch (error) {
      res.status(500).send({
        message: `Cannot delete guide with id=${req.params.id}. Please check the id you provided!`,
        error: error.message
      });
    }
  };

  export {
    createguide,
    getallguide,
    getguidebyid,
    updateguide,
    deleteguide
  };
