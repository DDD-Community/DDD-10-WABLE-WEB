export interface ProfileInfo {
  name: string;
  nickname: string;
  gender: string;
  birth: string;
  profile_image_url: string;
  mbti: string;
  hobby: string[];
}

export type CardDirection = 'SENT' | 'RECEIVED';

export type CardViewType = 'GRID' | 'LIST';
