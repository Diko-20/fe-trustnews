import { z } from "zod";

export const formSchema = z.object({
    email: z.string({required_error: 'E-mail harus diisi'}).email({message: 'Email tidak validar'}),
    password: z.string({required_error: 'Password harus diisi minimal 8 karakter'}).min(8)
})