import Garden from '../models/gardens.js';

const checkAvailableGarden = async (req, res, next) => {
  const { gardenId } = req.body;

  try {
    const garden = await Garden.findByPk(gardenId);
    if (!garden) {
      return res.status(404).json({ error: 'Garden not found' });
    }

    if (!garden.available) {
      return res.status(400).json({ error: 'Garden is not available' });
    }

    res.locals.garden = garden;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { checkAvailableGarden};
