import mongoose from 'mongoose';

async function connectDB() : Promise<void> {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('Conectado a la base de datos');
}