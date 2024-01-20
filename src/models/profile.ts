import { z } from 'zod';

export const profileSchema = z.object({
  name: z
    .string({
      required_error: '이름을 입력해주세요.',
    })
    .max(10, {
      message: '이름은 10자 이내로 입력해주세요.',
    }),
  nickname: z
    .string({
      required_error: '닉네임을 입력해주세요.',
    })
    .max(10, {
      message: '닉네임은 10자 이내로 입력해주세요.',
    }),
  gender: z.tuple([z.literal('남성'), z.literal('여성')], {
    required_error: '성별을 선택해주세요.',
  }),
  birthday: z.string({
    required_error: '생년월일을 입력해주세요.',
  }),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
