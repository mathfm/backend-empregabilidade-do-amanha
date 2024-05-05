import { EmployerEntity } from "../../entities/EmployerEntity.js";
import { fieldExistValidation } from "../validation/fieldsExist.js";
import { schemaValidation } from "../validation/schemaValidation.js";
import { employerSchema } from "../validation/schemas.js";

export const employerMiddleware = async (req, res, next) => {
  try {
    const emailExist = await fieldExistValidation(
      EmployerEntity,
      "email",
      req.body.email
    );
    if (emailExist) {
      return res.status(400).json({ error: "Email ja registrado" });
    }
    const errorsFields = await schemaValidation(employerSchema, req.body);

    if (errorsFields) {
      return res.status(400).json({ errors: errorsFields });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
