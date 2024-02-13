import { Avatar, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import ProfileImageUrl from '@/assets/icons/profile.svg?url';

export default function Card({
  imgSrc,
  sender,
  receiver,
  preview,
}: {
  imgSrc?: string;
  sender: string;
  receiver: string;
  preview: string;
}) {
  return (
    <Flex
      gap="32px"
      backgroundColor="white"
      align="center"
      px="24px"
      py="16px"
      borderRadius="12px"
    >
      <VStack gap="6px" width="80px">
        <Avatar
          width="58px"
          height="58px"
          src={imgSrc ?? ProfileImageUrl.src.toString()}
        />
        <Text
          size="12px"
          color="var(--chakra-colors-gray-500)"
          fontWeight="medium"
        >
          {sender}
        </Text>
      </VStack>
      <Flex flexDir="column" minWidth="448px">
        <Heading size="18px" fontWeight="bold">
          {receiver}님 감사해요!😊
        </Heading>
        <Text
          size="12px"
          fontWeight="medium"
          mt="4px"
          color="var(--chakra-colors-gray-500)"
        >
          {sender}님이 감사카드를 보냈어요.
        </Text>
        <Text size="12px" fontWeight="medium" mt="12px" noOfLines={2}>
          {preview}
        </Text>
      </Flex>
    </Flex>
  );
}
