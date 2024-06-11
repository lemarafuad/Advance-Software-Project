// routes/guideroute.js
import express from 'express';
import { getAllGuides, addGuide, updateGuide, deleteGuide,getGuidesByCategory } from '../controller/controlguide.js';

const router = express.Router();

router.get('/guides', getAllGuides);
router.post('/guides', addGuide);
router.put('/guides/:id', updateGuide);
router.delete('/guides/:id', deleteGuide);
router.get('/guides/:category', getGuidesByCategory);

export default router;
