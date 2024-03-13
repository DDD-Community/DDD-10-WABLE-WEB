import { AxiosError } from 'axios';
import axiosInstance from '..';

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

export { getGroupCards };
