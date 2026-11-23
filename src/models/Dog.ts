import { Schema, model } from 'mongoose';

const dogSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  breed: { type: Schema.Types.ObjectId, ref: 'Breed', required: true },
  vet: { type: Schema.Types.ObjectId, ref: 'Vet' },
  adopted: { type: Boolean, default: false },
});

export const Dog = model('Dog', dogSchema);