import { schemaValidation } from "../validation/schemaValidation.js";
import { jobEmployerSchema } from "../validation/schemas.js";

export const jobEmployerMiddleware = async (req, res, next) => {
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
