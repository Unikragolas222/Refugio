import type { Request, Response } from 'express';

interface ContactBody {
    name: string;
    email: string;
    message: string;
}

export function postContact(req: Request, res: Response) {
    const { name, email, message } = (req.body ?? {}) as Partial<ContactBody>;

    if (!name || !email || !message) {
        res.status(400).json({
            error: 'Faltan campos',
        });
        return;
    }

    res.status(201).json({
        received: true,
    });
}