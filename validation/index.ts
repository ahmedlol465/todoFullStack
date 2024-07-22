import { z } from "zod";

  
 export const todoFormSchema = z.object({
    titel: z.string().min(1, { message: 'Name is required' }),
    // email: z.string().email({ message: 'Not a valid email address' }),
    // username: z.string().min(1, { message: 'Username is required' }),
    body: z.string().min(1, { message: 'Body is required' }).optional(),
    completed: z.boolean()
 });
  
 export type ProfileFormValue = z.infer<typeof todoFormSchema>;
