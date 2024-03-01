import { AxiosError } from 'axios';
import axiosInstance from '..';
import { CardType } from './types';
import { CardDirection } from '@/components/pages/my-card/types';

async function getMyCards(
  cardDirection: CardDirection,
  groupIds: number[],
  cardTypes: CardType[],
  lastId: number,
  size: number,
) {
  const urlSlug = cardDirection === 'RECEIVED' ? `received` : `sent`;

  try {
    return await axiosInstance.get(`v1/cards/${urlSlug}`, {
      params: {
        groupIds,
        sid: cardTypes,
        lastId,
        size,
      },
    });
  } catch (err: any) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
}

async function getGroupCards(
  groupIds: number | undefined,
  lastId?: number,
  size?: number,
) {
  try {
    return await axiosInstance.get('v1/cards', {
      params: {
        groupIds,
        lastId,
        size,
      },
    });
  } catch (err: any) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
}

export { getMyCards, getGroupCards };
