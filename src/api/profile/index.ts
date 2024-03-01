import { AxiosError } from 'axios';
import axiosInstance from '..';
import { MyProfileResponseDto, Question, QuestionSid } from './types';
import { ProfileInfo } from '@/components/common/profile-info/types';

const questionSidForParse: QuestionSid[] = ['MBTI', 'HOBBY'];
const parseSet: Record<
  Extract<QuestionSid, 'MBTI' | 'HOBBY'>,
  (question: Question) => Record<string, string | string[]>
> = {
  MBTI: (question: Question) => ({
    mbti: question.answers[0],
  }),
  HOBBY: (question: Question) => ({
    hobby: question.answers,
  }),
};

function parseQuestions(profileResponse: MyProfileResponseDto): ProfileInfo {
  const question = profileResponse.questions.reduce((acc, cur: Question) => {
    const parseFunction = parseSet[cur.sid];
    if (parseFunction) {
      return { ...acc, ...parseFunction(cur.answers) };
    }
    return acc;
  }, {});

  delete profileResponse.questions;

  return { ...profileResponse, ...question };
}

async function getMyProfiles() {
  try {
    const data = await axiosInstance.get(`v1/profiles/me`);

    return;
  } catch (err: any) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
}

export { getMyProfiles };
