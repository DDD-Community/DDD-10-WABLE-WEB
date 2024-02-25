import { HStack, Text, VStack } from '@chakra-ui/react';
import { CardDirectionTabItem, ViewTypeTabItem } from './styles';
import {
  CardListHeaderProps,
  CardDirectionTabProps,
  ViewTypeTabProps,
} from './types';
import { PropsWithChildren } from 'react';
import { CardDirection, CardViewType } from '../../types';
import FilterIcon from '@/assets/icons/filter.svg';
import GridIcon from '@/assets/icons/grid.svg';
import ListIcon from '@/assets/icons/list.svg';

function CardDirectionTab({
  children,
  currentCardDirection,
  cardDirection,
  onClick,
}: PropsWithChildren<CardDirectionTabProps>) {
  return (
    <CardDirectionTabItem
      onClick={() => onClick(cardDirection)}
      isActive={cardDirection === currentCardDirection}
    >
      {children}
    </CardDirectionTabItem>
  );
}

function ViewTypeTab({
  children,
  currentViewType,
  viewType,
  onClick,
}: PropsWithChildren<ViewTypeTabProps>) {
  return (
    <ViewTypeTabItem
      onClick={() => onClick(viewType)}
      isActive={viewType === currentViewType}
    >
      {children}
    </ViewTypeTabItem>
  );
}

export default function CardListHeader({
  cardDirection,
  viewType,
  onChangeCardDirection,
  onChangeViewType,
}: CardListHeaderProps) {
  function handleCardDirectionClick(newCardDirection: CardDirection) {
    onChangeCardDirection(newCardDirection);
  }

  function handleViewTypeClick(newViewType: CardViewType) {
    onChangeViewType(newViewType);
  }

  return (
    <VStack gap="24px" as="header" width="full" alignItems="flex-start">
      <HStack gap={0}>
        <CardDirectionTab
          cardDirection="RECEIVED"
          currentCardDirection={cardDirection}
          onClick={handleCardDirectionClick}
        >
          <Text>받은 카드</Text>
        </CardDirectionTab>
        <CardDirectionTab
          cardDirection="SENT"
          currentCardDirection={cardDirection}
          onClick={handleCardDirectionClick}
        >
          <Text>보낸 카드</Text>
        </CardDirectionTab>
      </HStack>
      <HStack justifyContent="space-between" width="full">
        <FilterIcon />
        <HStack>
          <ViewTypeTab
            viewType="GRID"
            currentViewType={viewType}
            onClick={handleViewTypeClick}
          >
            <GridIcon />
          </ViewTypeTab>
          <ViewTypeTab
            viewType="LIST"
            currentViewType={viewType}
            onClick={handleViewTypeClick}
          >
            <ListIcon />
          </ViewTypeTab>
        </HStack>
      </HStack>
    </VStack>
  );
}
