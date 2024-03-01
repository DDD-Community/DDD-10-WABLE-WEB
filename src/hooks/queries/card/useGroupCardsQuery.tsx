import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getGroupCards } from '@/api/card';
import CardPreviewType from '@/components/pages/home/card.type';

export function useGroupCardsQuery(
  groupIds: number | undefined,
  lastId: number,
  size: number,
) {
  return useQuery<CardPreviewType[], AxiosError>({
    queryKey: ['groupCards'],
    queryFn: async () => getGroupCards(groupIds, lastId, size),
  });
}
