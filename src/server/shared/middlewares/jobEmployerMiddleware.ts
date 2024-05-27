import { Request, Response, NextFunction } from "express";
import { schemaValidation } from "../validation/schemaValidation";
import { jobEmployerSchema } from "../validation/schemas";

export const jobEmployerMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const errorsFields = await schemaValidation(jobEmployerSchema, req.body);

    if (errorsFields) {
      return res.status(400).json({ errors: errorsFields });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
