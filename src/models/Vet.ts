import { Schema, model } from 'mongoose';

// Definimos la interfaz unificando los datos del veterinario y credenciales de acceso
export interface IVet {
  name: string;
  email: string;
  password: string;
  specialty?: string; // Opcional por si un veterinario es generalista
}

const vetSchema = new Schema<IVet>({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true,
    select: false
  },
  specialty: { 
    type: String, 
    trim: true 
  },
});

export const Vet = model<IVet>('Vet', vetSchema);