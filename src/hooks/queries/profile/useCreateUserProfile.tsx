import { CreateUserProfileRequestDto, createUserProfile } from '@/api/profile';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export function useCreateUserProfile(
  options: UseMutationOptions<
    unknown,
    unknown,
    CreateUserProfileRequestDto,
    unknown
  >,
) {
  return useMutation({
    ...options,
    mutationFn: (requestDto: CreateUserProfileRequestDto) =>
      createUserProfile(requestDto),
  });
}
