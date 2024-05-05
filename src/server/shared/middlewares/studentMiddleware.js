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
      return res.status(400).json({ error: "Email already exists" });
    }
    const errorsFields = await schemaValidation(studentSchema, req.body);


    if (errorsFields) {
      return res.status(400).json({ errors: errorsFields });
    }

    next(); // Chama a próxima função de middleware (StudentController.createStudent)
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};