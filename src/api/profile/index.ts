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
    const response = await axiosInstance.post('v1/profiles/user', dto);

    return response.data;
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

export async function getPresignedUrl() {
  const response = await axiosInstance.get<PresignedUrlResponseDto>(
    '/v1/profiles/presigned-url',
  );

  return {
    filename: response.data.filename,
    presignedUrl: response.data.signedUrl,
  };
}

export async function getUserProfile() {
  const response =
    await axiosInstance.get<CreateUserProfileRequestDto>('v1/profiles/me');

  return response.data;
}
