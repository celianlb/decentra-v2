import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
