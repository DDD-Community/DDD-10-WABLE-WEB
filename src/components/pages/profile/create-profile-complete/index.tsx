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
          {data?.name}님,
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
            {data?.profileImageUrl ? (
              <Image
                src={data?.profileImageUrl ?? BASE_PROFILE_IMAGE}
                fill
                alt="프로필 사진"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <Image
                width={143}
                height={180}
                src="/images/waggle.png"
                alt="와글이 기본 이미지"
              />
            )}
          </Flex>
          <Heading size="sm">{data?.name}</Heading>
        </Flex>
      </Flex>
      <Link href={ROUTES.HOME}>
        <Button size="lg" w="100%" variant="primary">
          홈
        </Button>
      </Link>
    </Center>
  );
}
