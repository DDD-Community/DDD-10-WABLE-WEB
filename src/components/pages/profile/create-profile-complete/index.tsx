import { ROUTES } from '@/constants/routes';
import { useGetUserProfile } from '@/hooks/queries/profile/useGetUserProfile';
import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_PROFILE_IMAGE } from '@/constants/profile/base-image';

export function CreateProfileComplete() {
  const { data, isLoading } = useGetUserProfile();

  if (isLoading) return null;

  return (
    <Center maxW="412px" w="100%" flexDirection="column" gap="64px">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="36px"
      >
        <Heading size="xl" textAlign="center">
          신승준님,
          <br />
          가입을 축하드립니다.
        </Heading>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="24px"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            position="relative"
            w="274px"
            h="274px"
            bg="gray.400"
          >
            <Image
              src="/images/my-face.jpeg"
              fill
              alt="프로필 사진"
              style={{ objectFit: 'cover', borderRadius: '12px' }}
            />
          </Flex>
          <Heading size="sm">신승준</Heading>
        </Flex>
      </Flex>
      <Link href={ROUTES.GROUP.HOME('DDD')}>
        <Button size="lg" w="100%" variant="primary">
          홈
        </Button>
      </Link>
    </Center>
  );
}
