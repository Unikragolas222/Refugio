import { Schema, model } from 'mongoose';

const dogSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, min: 0 },
    breed: { type: Schema.Types.ObjectId, ref: 'Breed', required: true },
    vet: { type: Schema.Types.ObjectId, ref: 'Vet' },
    status: {
      type: String,
      enum: ['available', 'in_treatment', 'adopted'],
      default: 'available',
    },
  },
  { timestamps: true }
);
export const Dog = model('Dog', dogSchema);