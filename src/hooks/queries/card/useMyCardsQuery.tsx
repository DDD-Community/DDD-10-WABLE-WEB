import axiosInstance from '../../../api';
import { useQuery } from '@tanstack/react-query';
import { CardType } from '@/api/card/types';
import { CardDirection, CardInfo } from '@/components/pages/my-card/types';
import { AxiosError } from 'axios';
import { getMyCards } from '@/api/card';

export function useMyCardsQuery(
  cardDirection: CardDirection,
  groupIds: number[],
  cardTypes: CardType[],
  lastId: number,
  size: number,
) {
  return useQuery<CardInfo[], AxiosError>({
    queryKey: ['myCard', groupIds, cardTypes, lastId, size],
    queryFn: async () =>
      getMyCards(cardDirection, groupIds, cardTypes, lastId, size),
  });
}
