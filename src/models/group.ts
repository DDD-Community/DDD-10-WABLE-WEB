import { z } from 'zod';

export const groupSchema = z.object({
  name: z.string({
    required_error: '그룹 이름을 입력해주세요.',
  }),
  requiredOptions: z.array(z.string()).default([]),
});

export type GroupSchema = z.infer<typeof groupSchema>;
