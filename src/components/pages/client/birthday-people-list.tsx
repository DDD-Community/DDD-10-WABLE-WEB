import {
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { format } from 'date-fns';

import { Carousel, Slide } from '@/components/common/carousel';
import CarouselStyleWrapper from '@/components/common/carousel/style';
import BirthdayCakeIcon from '@/assets/icons/birthday-line.svg';

function BirthdayPersonCard({ name, date }: { name: string; date: string }) {
  return (
    <Card borderRadius="12px" shadow="none" mt="16px">
      <CardBody
        padding="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Text fontSize="12px" fontWeight={500} color="waggle.gray.700">
            {date}
          </Text>
          <Heading fontSize="16px">{name}님 축하하기</Heading>
        </Stack>
        <IconButton
          isRound={true}
          variant="solid"
          background="black"
          fontSize="16px"
          color="white"
          aria-label={`${name}님께 생일 축하 카드 보내기`}
          size="xs"
          icon={<ChevronRightIcon />}
        />
      </CardBody>
    </Card>
  );
}

export default function BirthdayPeopleList({
  date,
}: {
  date: Date | undefined;
}) {
  const formattedDate = format(date ?? new Date(), 'M월 dd일');

  return (
    <>
      <Heading fontSize={16}>{formattedDate} 생일</Heading>
      <Flex align="center" gap="2px">
        <BirthdayCakeIcon />
        <Text color="waggle.gray.700" mt="4px" fontSize="12px">
          축하의 마음을 담아 카드를 보내보세요!
        </Text>
      </Flex>
      <CarouselStyleWrapper>
        <Carousel options={{ loop: true }}>
          <Slide>
            <BirthdayPersonCard name="김도경" date={formattedDate} />
            <BirthdayPersonCard name="김도경" date={formattedDate} />
            <BirthdayPersonCard name="김도경" date={formattedDate} />
          </Slide>
          <Slide>
            <BirthdayPersonCard name="신승준" date={formattedDate} />
            <BirthdayPersonCard name="신승준" date={formattedDate} />
          </Slide>
        </Carousel>
      </CarouselStyleWrapper>
    </>
  );
}
