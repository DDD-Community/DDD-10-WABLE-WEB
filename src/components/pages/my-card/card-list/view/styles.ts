import styled from '@emotion/styled';
import { CardType } from '../../types';
import gratitudeS from '@/assets/images/cards/gratitude-s.png';
import gratitudeL from '@/assets/images/cards/gratitude-l.png';
import celebrationS from '@/assets/images/cards/celebration-s.png';
import celebrationL from '@/assets/images/cards/celebration-l.png';
import encouragementS from '@/assets/images/cards/encouragement-s.png';
import encouragementL from '@/assets/images/cards/encouragement-l.png';
import greetingS from '@/assets/images/cards/greeting-s.png';
import greetingL from '@/assets/images/cards/greeting-l.png';

const cardTypeImages: Record<CardType, Record<'s' | 'l', string>> = {
  GRATITUDE: { s: gratitudeS.src, l: gratitudeL.src },
  CELEBRATION: { s: celebrationS.src, l: celebrationL.src },
  ENCOURAGEMENT: { s: encouragementS.src, l: encouragementL.src },
  GREETING: { s: greetingS.src, l: greetingL.src },
};

const CardTypeColor: Record<CardType, string> = {
  CELEBRATION: `blue`,
  ENCOURAGEMENT: `purple`,
  GRATITUDE: `pink`,
  GREETING: `orange`,
};

const CardViewListContainer = styled.ul`
  padding: 0 26px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  overflow-y: auto;
`;

const CardViewGridContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 16px;
  padding: 0 26px;
  overflow-y: auto;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  @media ${({ theme }) => theme.device.largeDevice} {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const CardListItem = styled.li`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 15px 0;

  &:not(:first-of-type) {
    border-top: 1px solid #ececec;
  }
`;

const CardGridItem = styled.li<{ type: CardType }>`
  justify-self: center;
  padding: 30px 32px 62px;
  width: 294px;
  height: 339px;
  border-radius: 8px;

  background-image: ${(props) =>
    'url(' + cardTypeImages[props.type]['l'] + ')'};
  background-repeat: no-repeat;
  background-size: cover;
  @media ${({ theme }) => theme.device.largeDevice} {
    height: 221px;
    background-image: ${(props) =>
      'url(' + cardTypeImages[props.type]['s'] + ')'};
  }
`;

const CardTypeBadge = styled.span<{ type: CardType }>`
  padding: 4px 12px;
  border-radius: 6px;
  color: ${(props) => `var(--chakra-colors-${CardTypeColor[props.type]}-800)`};
  background-color: ${(props) =>
    `var(--chakra-colors-${CardTypeColor[props.type]}-100)`};
`;

export {
  CardViewListContainer,
  CardViewGridContainer,
  CardListItem,
  CardGridItem,
  CardTypeBadge,
};
