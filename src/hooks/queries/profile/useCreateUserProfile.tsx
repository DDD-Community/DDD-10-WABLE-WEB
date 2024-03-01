import { CreateUserProfileRequestDto, createUserProfile } from '@/api/profile';
import { useMutation } from '@tanstack/react-query';

export function useCreateUserProfile() {
  return useMutation({
    mutationFn: (requestDto: CreateUserProfileRequestDto) =>
      createUserProfile(requestDto),
  });
}
