export type QuestionType = 'OPEN_ENDED' | 'MULTIPLE_CHOICE';

export type QuestionSid = 'MBTI' | 'HOBBY' | 'CUSTOM';

export interface QuestionDto {
  id: number;
  sid: QuestionSid;
  question: string;
  questionType: QuestionType;
  answers: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MyProfileResponseDto {
  userId: string;
  name: string;
  nickName: string;
  gender: string;
  birth: string;
  profileImageUrl: string;
  questions: QuestionDto[];
  group: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}
[];
