import { object, string } from "yup";

export const studentSchema = object({
  name: string().required().min(3),
  email: string().email().required().min(6),
  password: string().required().min(8),
  github_url: string().required().min(3),
  linkedin_url: string().required().min(3),
  description: string().required().min(10).max(130),
});

