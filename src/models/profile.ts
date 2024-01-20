import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string({
    required_error: '이름을 입력해주세요.',
  }),
  nickname: z.string({
    required_error: '닉네임을 입력해주세요.',
  }),
  gender: z.tuple([z.literal('남성'), z.literal('여성')]),
  birthday: z.string({
    required_error: '생년월일을 입력해주세요.',
  }),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
