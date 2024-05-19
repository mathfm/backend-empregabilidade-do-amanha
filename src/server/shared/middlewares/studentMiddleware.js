import { StudentEntity } from "../../entities/StudentEntitiy.js";
import { fieldExistValidation } from "../validation/fieldsExist.js";
import { schemaValidation } from "../validation/schemaValidation.js";
import { studentSchema } from "../validation/schemas.js";

export const studentMiddleware = async (req, res, next) => {
  try {
    const emailExist = await fieldExistValidation(
      StudentEntity,
      "email",
      req.body.email
    );
    if (emailExist) {
      return res.status(400).json({ error: "Email ja registrado" });
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