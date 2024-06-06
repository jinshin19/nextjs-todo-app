import { z } from "zod";

const pattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;:',.<>\/?~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{}|;:',.<>\/?~]{8,}$/;

const passwordMessageError =
  "Password must start with an uppercase letter, include lowercase letters, numbers, and special characters, and be at least 8 characters long";

export const RegisterSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(8, { message: passwordMessageError })
      .refine((value) => pattern.test(value), {
        message: passwordMessageError,
      }),
    confirmPassword: z.string().min(8, { message: "Password do not match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
export type TRegisterSchema = z.infer<typeof RegisterSchema>;
