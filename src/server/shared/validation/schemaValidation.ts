import { ValidationError, Schema } from "yup";

interface ValidationErrorDetail {
    error: string;
    path: string;
}

export const schemaValidation = async (schema: Schema<any>, value: any): Promise<ValidationErrorDetail[] | null> => {
    try {
        await schema.validate(value, { abortEarly: false });
        return null;
    } catch (error) {
        const captureErrors: ValidationErrorDetail[] = [];
        if (error instanceof ValidationError) {
            error.inner.forEach((err) => {
                if (err.message && err.path) {
                    captureErrors.push({ error: err.message, path: err.path });
                }
            });
            return captureErrors;
        }
        return null;
    }
};
