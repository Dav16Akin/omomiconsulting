import { z } from "zod"
 
export const ContactFormValidation = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email({message: "Invalid email address"}),
  subject: z.string().min(5).max(100),
  message: z.string().min(2).max(1000)
})