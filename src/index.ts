import express, { type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import dogRoutes from './routes/dog.routes.ts';
import breedRoutes from './routes/breed.routes.ts';
import vetRoutes from './routes/vet.routes.ts';

const app: Express = express();

app.use(express.json());

async function connectDB(): Promise<void> {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('Conectado a la base de datos');
}

app.get('/', (req: Request, res: Response) => {
  res.send('API del Refugio funcionando');
});

app.use('/dogs', dogRoutes);
app.use('/breeds', breedRoutes);
app.use('/vets', vetRoutes);

await connectDB();
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});