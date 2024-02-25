import { CardDirection, CardViewType } from '../../types';

export interface CardListHeaderProps {
  cardDirection: CardDirection;
  viewType: CardViewType;
  onChangeCardDirection: (newTab: CardDirection) => void;
  onChangeViewType: (newView: CardViewType) => void;
}

export interface CardDirectionTabProps {
  currentCardDirection: CardDirection;
  cardDirection: CardDirection;
  onClick: (cardDirection: CardDirection) => void;
}

export interface ViewTypeTabProps {
  currentViewType: CardViewType;
  viewType: CardViewType;
  onClick: (viewType: CardViewType) => void;
}
