import styled from '@emotion/styled';
import { CardType } from '../../types';

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
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 26px;
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

const CardGridItem = styled.li`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 8px;
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
