import styled from '@emotion/styled';
import { CardType } from '@/api/card/types';
import { cardTypeImages } from '@/utils/cardImage';

const CardTypeColor: Record<CardType, string> = {
  CELEBRATION: `blue`,
  ENCOURAGEMENT: `purple`,
  GRATITUDE: `pink`,
  GREETING: `orange`,
};

const CardViewListContainer = styled.ul`
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
  padding: 15px 26px;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }

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
  cursor: pointer;

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
