// sometimes, we want not to send the details of our application and want to over-write the default behaviour

// custom error handler which is from middleware

import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.stack);
  res.status(500).send(err.message);
}
