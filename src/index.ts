import express, { type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import { Dog } from './models/Dog.ts';

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

await connectDB();
app.listen(3000);