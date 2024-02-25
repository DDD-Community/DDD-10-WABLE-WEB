import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

export function CreateProfileComplete() {
  return (
    <Center maxW="412px" w="100%" flexDirection="column" gap="64px">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="36px"
      >
        <Heading size="xl" textAlign="center">
          홍길동님,
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
            w="274px"
            h="274px"
            bg="gray.400"
          >
            <Image
              width={143}
              height={180}
              src="/images/waggle.png"
              alt="와글이 기본 이미지"
            />
          </Flex>
          <Heading size="sm">홍길동</Heading>
        </Flex>
      </Flex>
      <Button w="100%">홈</Button>
    </Center>
  );
}
