import express, { type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import { Dog } from './models/Dog.ts';
import { Breed } from './models/Breed.ts';
import { Vet } from './models/Vet.ts';

const app: Express = express();

app.use(express.json());

async function connectDB() : Promise<void> {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('Conectado a la base de datos');
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/dogs', async (req: Request, res: Response) => {
  const dogs = await Dog.find();
  res.json(dogs);
});

app.post('/dogs', async (req: Request, res: Response) => {
  const dog = await Dog.create(req.body);
  res.status(201).json(dog);
});

app.post('/breeds', async (req: Request, res: Response) => {
  const breed = await Breed.create(req.body);
  res.status(201).json(breed);
});

app.get('/breeds', async (req: Request, res: Response) => {
  const breeds = await Breed.find();
  res.json(breeds);
});

app.post('/vets', async (req: Request, res: Response) => {
  const vet = await Vet.create(req.body);
  res.status(201).json(vet);
});

app.get('/vets', async (req: Request, res: Response) => {
  const vets = await Vet.find();
  res.json(vets);
});

await connectDB();
app.listen(3000);