import { z } from 'zod';

export const GENDER_OPTIONS = ['남성', '여성'] as const;

export const profileBaseInformationSchema = z.object({
  profileImageUrl: z
    .object({
      src: z.string(),
    })
    .optional(),
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

export const profileAdditionalInformationSchema = z.object({
  mbti: z.string().optional(),
  interests: z.array(z.string()).optional(),
});

export type ProfileBaseInformationSchema = z.infer<
  typeof profileBaseInformationSchema
>;

export type ProfileAdditionalInformationSchema = z.infer<
  typeof profileAdditionalInformationSchema
>;

export function mapProfileToRequestDto(
  profile: ProfileBaseInformationSchema & ProfileAdditionalInformationSchema,
) {
  const { name, nickname, gender, profileImageUrl, year, month, day } = profile;
  const questions = Object.entries(profile)
    .filter(([key]) => key === 'interests' || key === 'mbti')
    .map(([key, value]) => {
      if (key === 'mbti')
        return {
          sid: 'mbti',
          question: 'MBTI',
          questionType: 'OPEN_ENDED',
          answers: [value],
        };

      if (key === 'interests')
        return {
          sid: 'interests',
          question: '관심사',
          questionType: 'MULTIPLE_CHOICE',
          answers: value,
        };
    });

  return {
    name,
    nickname,
    gender,
    profileImageUrl: profileImageUrl?.src,
    birth: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
    questions,
  };
}
