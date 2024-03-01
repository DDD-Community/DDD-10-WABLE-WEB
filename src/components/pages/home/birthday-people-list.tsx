import Link from 'next/link';
import { Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { format } from 'date-fns';

import { Carousel, Slide } from '@/components/pages/home/carousel';
import CarouselStyleWrapper from '@/components/pages/home/carousel/style';
import BirthdayCakeIcon from '@/assets/icons/birthday-line.svg';
import { chunk } from '@/utils/array';

const MOCK_BIRTHDAY_PEOPLE = [
  { name: '김도경', birth: '3월 04일' },
  { name: '신승준', birth: '3월 13일' },
  { name: '조성원', birth: '3월 23일' },
  { name: '한나리', birth: '3월 02일' },
  { name: '조서현', birth: '3월 02일' },
  { name: '신민수', birth: '3월 02일' },
  { name: '최사라', birth: '3월 13일' },
  { name: '박경서', birth: '3월 13일' },
];

function BirthdayPersonCard({ name, date }: { name: string; date: string }) {
  return (
    <Link href="/">
      <Card
        borderRadius="12px"
        shadow="none"
        mt="16px"
        _hover={{
          backgroundColor: 'waggle.gray.600',
        }}
        transition={'background-color 0.2s'}
      >
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
          <Flex
            justify="center"
            align="center"
            borderRadius="full"
            backgroundColor="black"
            w="24px"
            h="24px"
            color="white"
          >
            <ChevronRightIcon />
          </Flex>
        </CardBody>
      </Card>
    </Link>
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
          {chunk(
            MOCK_BIRTHDAY_PEOPLE.filter((p) => p.birth === formattedDate),
            3,
          ).map((group, index) => (
            <Slide key={`group-${index}`}>
              {group.map((person, index) => (
                <BirthdayPersonCard
                  name={person.name}
                  date={formattedDate}
                  key={`person-${index}`}
                />
              ))}
            </Slide>
          ))}
        </Carousel>
      </CarouselStyleWrapper>
    </>
  );
}
