import { z } from "zod";

export const contentFormSchema = z.object({
    title: z.string({required_error: 'Title harus diisi.'}),
    excerpt: z.string({required_error: 'Kutipan harus diisi.'}),
    description: z.string({required_error: 'Deskripsi harus diisi.'}),
    categoryId: z.string({required_error: 'Kategori harus diisi.'})
})