import { NextFunction, Request, Response } from "express";

export function users(request: Request, response: Response, next: NextFunction) {
  try {
    return response.sendStatus(200);
  } catch(error) {
    next(error);
  }
}
