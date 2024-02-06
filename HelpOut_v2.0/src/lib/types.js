import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  // name: z
  //   .string()
  //   .min(2, { message: "Your name should not be that short!" })
  //   .max(100),
  // college: z.string().min(2).max(100),
  password: z.string().min(8, "password should be 10").max(100),
  confirmPassword: z.string(),
}).refine(date => date.password === date.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})