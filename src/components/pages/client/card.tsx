import { Avatar, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';

import ProfileImageUrl from '@/assets/icons/profile.svg?url';

import type CardType from './card.type';

const CardMessage = {
  인사: '안녕하세요! 😊',
  축하: '축하해요! 🥳',
  응원: '응원해요! 😇',
  감사: '감사해요! 🤩',
};

export default function Card({ data }: { data: CardType }) {
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
          src={data.imgSrc ?? (ProfileImageUrl.src as string)}
        />
        <Text
          fontSize="12px"
          color="var(--chakra-colors-gray-500)"
          fontWeight="medium"
        >
          {data.from}
        </Text>
      </VStack>
      <Flex flexDir="column">
        <Flex gap={2} align="center">
          <Heading fontSize="18px" fontWeight="bold">
            {data.to}님 {CardMessage[data.type as keyof typeof CardMessage]}
          </Heading>
          <Text fontSize="12px" color="var(--chakra-colors-gray-700)">
            {format(data.time, 'hh:mm aa')}
          </Text>
        </Flex>
        <Text
          fontSize="12px"
          fontWeight="medium"
          mt="4px"
          color="var(--chakra-colors-gray-500)"
        >
          {data.from}님이 {data.type}카드를 보냈어요.
        </Text>
        <Text fontSize="12px" fontWeight="medium" mt="12px" noOfLines={2}>
          {data.preview}
        </Text>
      </Flex>
    </Flex>
  );
}
