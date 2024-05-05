import { ValidationError } from "yup";

export const schemaValidation = async (schema, value) => {
  try {
    await schema.validate(value, { abortEarly: false });
    return null;
  } catch (error) {
    const captureErros = [];
    if (error instanceof ValidationError) {
      error.inner.forEach((error) => {
        error.message;
        error.path;
        captureErros.push({ error: error.message, path: error.path });
      });

      return captureErros;
    }
  }
};
