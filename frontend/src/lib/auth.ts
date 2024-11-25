import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

export const registerSchema = z.object({
  name: z.string().min(1, 'Required'),
  place: z.string().min(1, 'Required'),
  username: z.string().min(6, 'Must be atleast 6 characters'),
  password: z.string().min(8, 'Must be atleast 8 characters'),
});
