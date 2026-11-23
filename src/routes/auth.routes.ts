import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import { Vet } from '../models/Vet.ts';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  const { name, email, password, specialty } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const vet = await Vet.create({ name, email, password: hash, specialty });
  res.status(201).json({ id: vet._id });
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const vet = await Vet.findOne({ email }).select('+password');
  if (!vet) {
    res.sendStatus(401);
    return;
  }

  const valid = await bcrypt.compare(password, vet.password);
  if (!valid) {
    res.sendStatus(401);
    return;
  }
  req.session.vetId = vet.id;
  res.json({ loggedIn: true });
});

export default router;