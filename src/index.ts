import express, { type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import dogRoutes from './routes/dog.routes.ts';
import breedRoutes from './routes/breed.routes.ts';
import vetRoutes from './routes/vet.routes.ts';
import session from 'express-session';

const app: Express = express();
declare module 'express-session' {
  interface SessionData {
    vetId: string;
  }
}

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
}));

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