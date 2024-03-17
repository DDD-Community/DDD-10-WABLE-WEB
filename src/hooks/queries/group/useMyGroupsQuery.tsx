import { useQuery } from '@tanstack/react-query';
import { getMyGroups } from '@/api/group';
import { AxiosError } from 'axios';
import type { GroupListInfo } from '@/types/common/group';

export function useMyGroupsQuery() {
  return useQuery<GroupListInfo, AxiosError>({
    queryKey: ['myGroups'],
    queryFn: async () => getMyGroups(),
  });
}
