import Usersresources from "../models/userresource.js";
import resource from "../models/resource.js";


const createUserresourceRelation = async (req, res) => {
    try{
        console.log('Request Headers:', req.headers);
      console.log('Request Body:', req.body); // Log the entire request body
    
      const { type, name, quantity, price,end_date} = req.body;
    
      if (!type || !name || !quantity || !price|| !end_date) {
        console.log('Missing fields:', {type, name, quantity, price,end_date});
        return res.status(400).json({ message: "All fields are required" });
      }
    
      const reso = await Usersresources.create({type, name, quantity, price,end_date});
      res.status(201).send(reso);
      console.log(`Add resource successfully in userres`)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the resource.'
      });
      console.log(error.message || 'Some error occurred while creating the resource.')
    }
};

const showSharingresources = async (req, res) => {
    try {
      const UserresourceRelations = await Usersresources.findAll();
      res.status(200).send(UserresourceRelations);
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
    }
  };

  //Get resources for spesific User.
  const  geresourcesForUserByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const resourcesIds = await Usersresources.findAll({
       // attributes: ["resource_id"],
        where: {UserId: id}
      });
      const resourcesNames = await Promise.all(resourcesIds.map(async (userresource) =>{
        const resourceId = userresource.resourceresourceId;
        //get resource name for each id..
        const resourceName = await resource.findByPk( resourceId, {
          attributes: ["name"]
        }); 
        return  {name: resourceName.name, status:userresource.status };
       }))
  
      if (resourcesNames.length) {
        res.status(200).send({resourcesNames: resourcesNames});
      } else {
        res.status(404).send({
          message: `The user with id=${id} has not add any resources yet.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving resources for user with id=' + id
      });
    }
  };
  
  //Get all users with specific resource 
  const  getUsersByresourceId = async (req, res) => {
    const{id} = req.params;
    try {
      const users = await Usersresources.findAll({
        where: {
          resourceresourceId: id
        }
      })
      if (users.length) {
        res.status(200).send(users);
      } else {
        res.status(404).send({
          message: `There is no users have resource with id=${id}.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving users for resource with id=' + id
      });
    }
  };

  const updateUserresource = async (req, res) => {
    const{id} = req.params;
    try {
      const num = await Usersresources.update(req.body, {
        where: { resourceresourceId: id }
      });
      if (num == 1) {
        res.send({
          message: 'resource was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update resource with id=${id}. Maybe resource was not found or req.body is empty!`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Error updating resource with id=' + id
      });
    }
  };

  const deleteUserresourceRelation = async (req, res) => {
    const{id} = req.params
    try {
      const num = await Usersresources.destroy({
        where: { 
          users_resources_id: id 
        }
      });
      if (num == 1) {
        res.send({
          message: 'Relation was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Relation with id=${id}. Maybe Relation was not found!`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Could not delete Relation with id=' + id
      });
    }
  };

export {
    createUserresourceRelation,
    showSharingresources,
    getUsersByresourceId,
    geresourcesForUserByUserId,
    updateUserresource,
    deleteUserresourceRelation
};