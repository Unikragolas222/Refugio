import express, { type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import {  } from './routes/user.ts';

const app: Express = express();

async function connectDB() : Promise<void> {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('Conectado a la base de datos');
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get("/users", );

app.listen(3000);