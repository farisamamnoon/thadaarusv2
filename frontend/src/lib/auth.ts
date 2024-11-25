import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string().min(1, "Required"),
    password: z.string().min(1, "Required")
})