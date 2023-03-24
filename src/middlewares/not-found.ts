import { NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction) {
	return res.status(200).json({ message: 'Route does not exist' });
}
