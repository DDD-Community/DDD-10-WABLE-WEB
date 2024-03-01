import { Avatar, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';

import ProfileImageUrl from '@/assets/icons/profile.svg?url';

import { CardInfo } from '../my-card/types';

const CardMessage = {
  GREETING: '안녕하세요! 😊',
  CELEBRATION: '축하해요! 🥳',
  ENCOURAGEMENT: '응원해요! 😇',
  GRATITUDE: '감사해요! 🤩',
};

const CardType = {
  GREETING: '인사',
  CELEBRATION: '축하',
  ENCOURAGEMENT: '응원',
  GRATITUDE: '감사',
};

export default function Card({ data }: { data: CardInfo }) {
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
          src={ProfileImageUrl.src as string}
        />
        <Text fontSize="12px" color="gray.500" fontWeight="medium">
          {data.fromUser.name}
        </Text>
      </VStack>
      <Flex flexDir="column">
        <Flex gap={2} align="center">
          <Heading fontSize="18px" fontWeight="bold">
            {data.toUser.name}님 {CardMessage[data.sid]}
          </Heading>
          <Text fontSize="12px" color="gray.700">
            {format(data.createdAt, 'hh:mm aa')}
          </Text>
        </Flex>
        <Text fontSize="12px" fontWeight="medium" mt="4px" color="gray.500">
          {data.fromUser.name}님이 {CardType[data.sid]}카드를 보냈어요.
        </Text>
        <Text fontSize="12px" fontWeight="medium" mt="12px" noOfLines={2}>
          {data.content}
        </Text>
      </Flex>
    </Flex>
  );
}
