import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import { Vet } from '../models/Vet.ts';
import { requireAuth } from '../middleware/requireAuth.ts';

const router = Router();