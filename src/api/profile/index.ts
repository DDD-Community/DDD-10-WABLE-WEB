import { isAxiosError } from 'axios';
import axiosInstance from '..';

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
