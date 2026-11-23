import { Router, type Request, type Response } from 'express';
import { Dog } from '../models/Dog.ts';
import { requireAuth } from '../middleware/requireAuth.ts';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const dogs = await Dog.find();
  res.json(dogs);
});

router.post('/', requireAuth, async (req: Request, res: Response) => {
  const dog = await Dog.create(req.body);
  res.status(201).json(dog);
});

export default router;