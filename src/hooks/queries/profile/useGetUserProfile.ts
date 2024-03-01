import { getUserProfile } from '@/api/profile';
import { useQuery } from '@tanstack/react-query';

export function useGetUserProfile() {
  return useQuery({ queryKey: ['user-profile'], queryFn: getUserProfile });
}
