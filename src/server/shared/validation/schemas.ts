import { object, string, ObjectSchema } from "yup";

export const studentSchema: ObjectSchema<any> = object({
    name: string().required().min(3),
    email: string().email().required().min(6),
    password: string().required().min(8),
    github_url: string().required().min(3),
    linkedin_url: string().required().min(3),
    description: string().required().min(10).max(300),
});

export const employerSchema: ObjectSchema<any> = object({
    name: string().required().min(3),
    email: string().email().required().min(6),
    password: string().required().min(8),
});

export const jobEmployerSchema: ObjectSchema<any> = object({
    title: string().required().min(3),
    description: string().required().min(10).max(300),
    link_job: string().required().min(3),
});
