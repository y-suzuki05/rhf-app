import { z } from "zod";

export const basicFormSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  age: z.string().nullable(),
  password: z
    .string()
    .min(8, { message: "8桁以上のパスワードを入力してください" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "英大文字、英小文字、数字で入力してください",
    }),
});

export type BasicFormSchemaType = z.infer<typeof basicFormSchema>;
