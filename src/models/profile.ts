import { z } from 'zod';

export const GENDER_OPTIONS = ['남성', '여성'] as const;

export const profileSchema = z.object({
  name: z
    .string({
      required_error: '이름을 입력해주세요.',
    })
    .min(1, {
      message: '이름은 1자 이상 입력해주세요.',
    })
    .max(10, {
      message: '이름은 10자 이내로 입력해주세요.',
    }),
  nickname: z
    .string()
    .max(10, {
      message: '닉네임은 10자 이내로 입력해주세요.',
    })
    .optional(),
  gender: z.enum(GENDER_OPTIONS, {
    required_error: '성별을 선택해주세요.',
  }),
  year: z.string({ required_error: '생일을 입력해주세요.' }).min(1, {
    message: '생일을 입력해주세요.',
  }),
  month: z.string({ required_error: '생일을 입력해주세요.' }).min(1, {
    message: '생일을 입력해주세요.',
  }),
  day: z.string({ required_error: '생일을 입력해주세요.' }).min(1, {
    message: '생일을 입력해주세요.',
  }),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
