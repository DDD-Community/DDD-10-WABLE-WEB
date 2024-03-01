import { CardInfo, CardViewType } from '../../types';

export interface Props {
  cardList: CardInfo[];
  viewType: CardViewType;
  onClickCard: (card: CardInfo) => void;
}

export interface ItemProps {
  card: CardInfo;
  onClick: () => void;
}
