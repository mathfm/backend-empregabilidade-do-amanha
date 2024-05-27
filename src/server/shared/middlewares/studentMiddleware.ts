import { Request, Response, NextFunction } from "express";
import { StudentEntity } from "../../entities/StudentEntitiy";
import { fieldExistValidation } from "../validation/fieldsExist";
import { schemaValidation } from "../validation/schemaValidation";
import { studentSchema } from "../validation/schemas";

export const studentMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const emailExist = await fieldExistValidation(
      StudentEntity,
      "email",
      req.body.email
    );
    if (emailExist) {
      return res.status(400).json({ error: "Email já registrado" });
    }
    const errorsFields = await schemaValidation(studentSchema, req.body);

    if (errorsFields) {
      return res.status(400).json(errorsFields);
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
