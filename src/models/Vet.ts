import { Schema, model } from 'mongoose';

const vetSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  specialty: { type: String, trim: true },
});
export const Vet = model('Vet', vetSchema);