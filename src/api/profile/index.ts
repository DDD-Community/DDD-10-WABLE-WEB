import { isAxiosError } from 'axios';
import axiosInstance from '..';
import { MyProfileResponseDto, QuestionDto, QuestionSid } from './types';
import { Profile } from '@/components/common/profile-info/types';

export type Question = {
  sid: string;
  question: string;
  questionType: string;
  answers: string[];
};

export type CreateUserProfileRequestDto = {
  name: string;
  nickname: string;
  gender: '남성' | '여성';
  birth: string;
  profileImageUrl?: string;
  questions: Question[];
};

export async function createUserProfile(dto: CreateUserProfileRequestDto) {
  try {
    const data = await axiosInstance.post('v1/profiles/user', dto);

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      return error.response;
    }
  }
}

const questionSidForParse: QuestionSid[] = ['MBTI', 'HOBBY'];
const parseSet: Record<
  Extract<QuestionSid, 'MBTI' | 'HOBBY'>,
  (question: QuestionDto) => Record<string, string | string[]>
> = {
  MBTI: (question: QuestionDto) => ({
    mbti: question.answers[0],
  }),
  HOBBY: (question: QuestionDto) => ({
    hobby: question.answers,
  }),
};

function parseQuestions(profileResponse: MyProfileResponseDto): Profile {
  const question = profileResponse.questions.reduce((acc, cur: QuestionDto) => {
    const parseFunction = parseSet[cur.sid];
    if (parseFunction) {
      return { ...acc, ...parseFunction(cur.answers) };
    }
    return acc;
  }, {});

  delete profileResponse.questions;

  return { ...profileResponse, ...question };
}

export async function getMyProfiles() {
  try {
    const data = await axiosInstance.get(`v1/profiles/me`);

    return;
  } catch (err: any) {
    if (isAxiosError(err)) {
      console.error(err);
      return err.response;
    }
  }
}

type PresignedUrlResponseDto = {
  filename: string;
  signedUrl: string;
};

export async function getPresignedUrl(): Promise<{
  filename: string;
  signedUrl: string;
}> {
  return await axiosInstance.get('/v1/profiles/presigned-url');
}

export async function getUserProfile() {
  return await axiosInstance.get('v1/profiles/me');
}
