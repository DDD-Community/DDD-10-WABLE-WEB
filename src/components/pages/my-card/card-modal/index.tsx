import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Props } from './types';
import { CloseIcon } from '@chakra-ui/icons';
import { CardType } from '../types';
import { cardTypeMap } from '../constants';
import { Card } from './styles';

export function CardModal({ card, onCardClose }: Props) {
  return (
    <VStack as="section" padding="16px 24px 82px">
      <HStack as="header" justifyContent="flex-end" width="full">
        <CloseIcon onClick={onCardClose} style={{ cursor: 'pointer' }} />
      </HStack>
      <VStack as="section" gap="34px">
        <VStack as="section" gap="16px">
          <Box
            width="58px"
            height="58px"
            borderRadius="500px"
            backgroundColor="white"
          />
          <Text as="strong">
            {card.fromUser.name}님이 보낸 {cardTypeMap[card.sid]}카드입니다.
          </Text>
        </VStack>
        <Card type={card.sid}>{card.content}</Card>
      </VStack>
    </VStack>
  );
}
