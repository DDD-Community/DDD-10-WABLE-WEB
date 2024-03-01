import { CardType } from '@/api/card/types';

const cardTypeMap: Record<CardType, string> = {
  GREETING: '인사',
  CELEBRATION: '축하',
  ENCOURAGEMENT: '응원',
  GRATITUDE: '감사',
};

export { cardTypeMap };
