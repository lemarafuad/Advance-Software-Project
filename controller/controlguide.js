// controllers/guideController.js
import Guide from '../models/guide.js';

export const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.json(guides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addGuide = async (req, res) => {
  const { title, content , author ,category } = req.body;
  try {
    const newGuide = await Guide.create({ title, content ,author , category });
    res.status(201).json(newGuide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateGuide = async (req, res) => {
  const { id } = req.params;
  const { title, content , author ,category } = req.body;
  try {
    const guide = await Guide.findByPk(id);
    if (guide) {
      guide.title = title;
      guide.content = content;
      guide.author=author;
      guide.category=category;
      await guide.save();
      res.json(guide);
    } else {
      res.status(404).json({ message: 'Guide not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteGuide = async (req, res) => {
  const { id } = req.params;
  try {
    const guide = await Guide.findByPk(id);
    if (guide) {
      await guide.destroy();
      res.json({ message: 'Guide deleted successfully' });
    } else {
      res.status(404).json({ message: 'Guide not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
