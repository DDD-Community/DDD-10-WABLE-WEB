import axiosInstance from '../../api';
import { useQuery } from '@tanstack/react-query';
import {
  CardDirection,
  CardInfo,
  CardType,
} from '@/components/pages/my-card/types';
import { AxiosError } from 'axios';

export function useMyCardsQuery(
  cardDirection: CardDirection,
  groupIds: number[],
  cardTypes: CardType[],
  lastId: number,
  size: number,
) {
  const urlSlug = cardDirection === 'RECEIVED' ? `received` : `sent`;

  const {
    isLoading: isMyCardsLoading,
    isError: isMyCardsError,
    data: myCards,
    isSuccess: isMyCardsSuccess,
  } = useQuery<CardInfo[], AxiosError>({
    queryKey: ['myCard', groupIds, cardTypes, lastId, size],
    queryFn: async () =>
      await axiosInstance.get(`v1/cards/${urlSlug}`, {
        params: {
          groupIds,
          sid: cardTypes,
          lastId,
          size,
        },
      }),
  });

  return {
    isMyCardsLoading,
    isMyCardsError,
    myCards,
    isMyCardsSuccess,
  };
}
