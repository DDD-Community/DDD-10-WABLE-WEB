import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Props } from './types';
import { CloseIcon } from '@chakra-ui/icons';
import { cardTypeMap } from '../constants';
import { Card } from './styles';
import one from '@/assets/images/mock/000101.png';
import two from '@/assets/images/mock/000401.png';
import three from '@/assets/images/mock/000601.png';
import four from '@/assets/images/mock/000701.png';
import Image from 'next/image';

export function CardModal({ card, onCardClose }: Props) {
  const image =
    [one, two, three, four].find(
      (data, index) => index === Math.floor(Math.random() * 3),
    ) || one;

  return (
    <VStack as="section" padding="16px 24px 82px">
      <HStack as="header" justifyContent="flex-end" width="full">
        <CloseIcon onClick={onCardClose} style={{ cursor: 'pointer' }} />
      </HStack>
      <VStack as="section" gap="34px">
        <VStack as="section" gap="16px">
          <Image
            src={image.src}
            width="58"
            height="58"
            alt={card.fromUser.name}
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
