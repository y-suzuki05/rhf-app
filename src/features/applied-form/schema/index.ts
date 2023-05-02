import { z } from "zod";

export const appliedFormSchema = z
  .object({
    name: z.string().min(1, { message: "名前を入力してください" }),
    age: z.string().nullable(),
    password: z
      .string()
      .min(8, { message: "8桁以上のパスワードを入力してください" })
      .regex(/^[a-zA-Z0-9]+$/, {
        message: "英大文字、英小文字、数字で入力してください",
      }),
    foods: z.array(z.string()),
    other: z.string().nullable(),
  })
  .refine((data) => !data.foods.includes("その他") || !!data.other, {
    message: "その他の好きな食べ物を入力してください",
    path: ["other"],
  });

export type AppliedFormSchemaType = z.infer<typeof appliedFormSchema>;
