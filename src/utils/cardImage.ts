import { CardType } from '@/api/card/types';
import gratitudeS from '@/assets/images/cards/gratitude-s.png';
import gratitudeL from '@/assets/images/cards/gratitude-l.png';
import gratitudeXL from '@/assets/images/cards/gratitude-xl.png';
import celebrationS from '@/assets/images/cards/celebration-s.png';
import celebrationL from '@/assets/images/cards/celebration-l.png';
import celebrationXL from '@/assets/images/cards/celebration-xl.png';
import encouragementS from '@/assets/images/cards/encouragement-s.png';
import encouragementL from '@/assets/images/cards/encouragement-l.png';
import encouragementXL from '@/assets/images/cards/encouragement-xl.png';
import greetingS from '@/assets/images/cards/greeting-s.png';
import greetingL from '@/assets/images/cards/greeting-l.png';
import greetingXL from '@/assets/images/cards/greeting-xl.png';

const cardTypeImages: Record<CardType, Record<'s' | 'l' | 'xl', string>> = {
  GRATITUDE: { s: gratitudeS.src, l: gratitudeL.src, xl: gratitudeXL.src },
  CELEBRATION: {
    s: celebrationS.src,
    l: celebrationL.src,
    xl: celebrationXL.src,
  },
  ENCOURAGEMENT: {
    s: encouragementS.src,
    l: encouragementL.src,
    xl: encouragementXL.src,
  },
  GREETING: { s: greetingS.src, l: greetingL.src, xl: greetingXL.src },
};

export { cardTypeImages };
