import { Router, type Request, type Response } from 'express';
import { Vet } from '../models/Vet.ts';
import bcrypt from 'bcrypt';
import { requireAuth } from '../middleware/requireAuth.ts';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const vets = await Vet.find().select('-password');
    res.json(vets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los veterinarios', error });
  }
});

router.post('/', requireAuth, async (req: Request, res: Response) => {
  const { name, email, password, specialty } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const vet = await Vet.create({ name, email, password: hash, specialty });
  res.status(201).json({ id: vet._id, name: vet.name, email: vet.email });
});

export default router;