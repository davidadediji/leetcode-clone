import { Express, Request, NextFunction, Response } from "express"
export const notFound = (req: Request, res: Response, next: NextFunction) => res.status(404).send('Route does not exist')