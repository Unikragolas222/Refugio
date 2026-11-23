import type { Request, Response, NextFunction } from 'express';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.vetId) {
    res.status(401).json({ message: 'Hace falta iniciar sesión' });
    return;
  }
  next();
}