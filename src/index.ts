import express, { type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';

const app: Express = express();

async function connectDB() : Promise<void> {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('Conectado a la base de datos');
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000);