import { CardType } from '@/api/card/types';

interface CardPreviewType {
  id: number;
  content: string;
  sid: CardType;
  fromUserId: string;
  fromUserNickname: string;
  fromUserProfileImageUrl: string;
  toUserId: string;
  toUserNickname: string;
  toUserProfileImageUrl: string;
  createdAt: Date;
}

export default CardPreviewType;
