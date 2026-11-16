import { Router, type Request, type Response } from 'express';
import { Vet } from '../models/Vet.ts';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const vets = await Vet.find().select('-password');
    res.json(vets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los veterinarios', error });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const vet = await Vet.create(req.body);
    res.status(201).json(vet);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el veterinario', error });
  }
});

export default router;