import { Schema, model } from 'mongoose';

const breedSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
});
export const Breed = model('Breed', breedSchema);