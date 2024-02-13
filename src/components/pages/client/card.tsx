import { Avatar, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import ProfileImageUrl from '@/assets/icons/profile.svg?url';

const CardMessage = {
  인사: '안녕하세요!😊',
  축하: '축하해요!🥳',
  응원: '응원해요!😇',
  감사: '감사해요!🤩',
};

export default function Card({
  type,
  imgSrc,
  sender,
  receiver,
  preview,
}: {
  type: string;
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
          src={imgSrc ?? (ProfileImageUrl.src as string)}
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
          {receiver}님 {CardMessage[type as keyof typeof CardMessage]}
        </Heading>
        <Text
          size="12px"
          fontWeight="medium"
          mt="4px"
          color="var(--chakra-colors-gray-500)"
        >
          {sender}님이 {type}카드를 보냈어요.
        </Text>
        <Text size="12px" fontWeight="medium" mt="12px" noOfLines={2}>
          {preview}
        </Text>
      </Flex>
    </Flex>
  );
}
