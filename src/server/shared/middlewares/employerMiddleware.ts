import { Request, Response, NextFunction } from "express";
import { EmployerEntity } from "../../entities/EmployerEntity";
import { fieldExistValidation } from "../validation/fieldsExist";
import { schemaValidation } from "../validation/schemaValidation";
import { employerSchema } from "../validation/schemas";

export const employerMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  let response;

  try {
    const emailExist = await fieldExistValidation(
      EmployerEntity,
      "email",
      req.body.email
    );

    if (emailExist) {
      response = res.status(400).json({ error: "Email já registrado" });
    } else {
      const errorsFields = await schemaValidation(employerSchema, req.body);

      if (errorsFields) {
        response = res.status(400).json({ errors: errorsFields });
      } else {
        next(); 
        return; 
      }
    }
  } catch (error) {
    response = res.status(500).json({ error: "Internal server error" });
  }

  if (response) {
    return response;
  }

  next();
};
