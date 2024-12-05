import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  dob: z
    .string()
    .min(1, 'DOB is required')
    .transform((value) => new Date(value))
    .refine(
      (value) => value <= new Date(),
      'Date of Birth must not be in the future'
    ),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  phoneNumber: z
    .string()
    .min(10, 'Phone Number must be atleast 10 numbers')
    .regex(/^[0-9]+$/, 'Phone Number can only contain numbers'),
});

export type AddStudentSchema = z.infer<typeof schema>;
