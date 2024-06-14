import resource from '../models/resource.js';

const createresource = async (req, res) => {
  try{
    console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body); // Log the entire request body

  const { type, name, quantity, price} = req.body;

  if (!type || !name || !quantity || !price) {
    console.log('Missing fields:', {type, name, quantity, price});
    return res.status(400).json({ message: "All fields are required" });
  }

  const reso = await resource.create({ type, name, quantity, price});
  res.status(201).send(reso);
  console.log(`Add resource successfully`)
} catch (error) {
  res.status(500).send({
    message: error.message || 'Some error occurred while creating the resource.'
  });
  console.log(error.message || 'Some error occurred while creating the resource.')
}
};

const getAllresources = async (req, res) => {
  try{
    const allgardens= await resource.findAll();
    res.status(200).send(allgardens);
    console.log("Done get all resources");
    }catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving resources.'
      });
    }
};

const getresourceById = async (req, res) => {
  try{
    const resid = await resource.findByPk(req.params.id);
    if(resid)
      {
        res.status(200).send(resid);
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

const updateresource = async (req, res) => {
  try {
    const [idupdate] = await resource.update(req.body, { where: { id: req.params.id } });
    if (idupdate == 1) {
      res.send({ message: 'Resource was updated successfully.' });
    } else {
      res.status(404).send({ message: `Cannot update resource with id=${req.params.id}. Resource not found!` });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot update resource with id=${req.params.id}. Please check the id you provided!`,
      error: error.message
    });
  }
};

const deleteresource = async (req, res) => {
  try {
    const id = req.params.id;
    const iddelete = await resource.destroy({ where: { id: id } });
    //Checks if a row was deleted
    if (iddelete == 1) {
      res.send({ message: 'Resource was deleted successfully.' });
    } else {
      res.status(404).send({ message: `Cannot delete resource with id=${id}. Resource not found!` });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot delete resource with id=${req.params.id}. Please check the id you provided!`,
      error: error.message
    });
  }
};

export {
  createresource,
  getAllresources,
  getresourceById,
  updateresource,
  deleteresource
};
