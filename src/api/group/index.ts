import { AxiosError } from 'axios';
import axiosInstance from '..';

async function getMyGroups() {
  try {
    return await axiosInstance.get(`v1/groups`);
  } catch (err: any) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
}

export { getMyGroups };
