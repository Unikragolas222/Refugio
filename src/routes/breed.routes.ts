import { Router, type Request, type Response } from 'express';
import { Breed } from '../models/Breed.ts';
import { requireAuth } from '../middleware/requireAuth.ts';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const breeds = await Breed.find();
  res.json(breeds);
});

router.post('/', requireAuth, async (req: Request, res: Response) => {
  const breed = await Breed.create(req.body);
  res.status(201).json(breed);
});

export default router;