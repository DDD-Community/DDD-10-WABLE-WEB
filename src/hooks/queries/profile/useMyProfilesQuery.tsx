import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MyProfileResponseDto } from '@/api/profile/types';
import { getMyProfiles } from '@/api/profile';

export function useMyProfilesQuery() {
  return useQuery<MyProfileResponseDto[], AxiosError>({
    queryKey: ['myProfiles'],
    queryFn: async () => getMyProfiles(),
  });
}
