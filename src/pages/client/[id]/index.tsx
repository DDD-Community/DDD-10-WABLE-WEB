import { Divider, Flex, Heading } from '@chakra-ui/react';

import GNBLayout from '@/layouts/gnb-layout';
import DashboardItem from '@/components/common/dashboard-item';
import Card from '@/components/pages/client/card';
import Profile from '@/components/pages/client/profile';
import Calendar from '@/components/pages/client/calendar';
import { DividerWithContent } from '@/components/common/divider-with-content';

const MOCK_DATA = [
  {
    from: '조성원',
    to: '김도경',
    type: '감사',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    from: '신승준',
    to: '김도경',
    type: '인사',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    from: '조성원',
    to: '신승준',
    type: '응원',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    from: '김도경',
    to: '신승준',
    type: '축하',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
];

export default function Home() {
  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        그룹1에 오신걸 환영합니다.
      </Heading>
      <Profile
        src="https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NoEOsKXD5w0yt7BvBmmMmzPaBUYd8cPdngiFmcCsy9HcGNTEdsmEzYDjYhxQpjxQuS59kmhlPA1w4jqqMr4mBFsCBU8lukzrEuaictw8GMfrtEcFu34vpU4MhB-2iRh8mEC2ZF084ZY014Q~qoIx9GO-6Q9TRHeamBB9PuXncXfEDDMg5tloKfasLP7otc9VdKHcGoYTKm8fvwjfLqg7QLdJ2mPvgQGjM2Rsp7~GpcMBEUnmjjESOJ9wnnux2uSkTCCnLa--l06lAO3-n1p-~9R1SpYVnSr9nMAOzXD95JutarM3WbGK3vPn3waaIq5nQEzncHzwMj6LUEyW0Cil3g__"
        name="홍길동"
        email="esthera@simmmple.com"
      />
      <Flex height="full" gap="16px" w="full">
        <DashboardItem
          flexDir="column"
          gap="18px"
          overflow="auto"
          minWidth="653px"
          w="full"
          h="full"
        >
          <DividerWithContent
            content="12월 20일"
            bg="var(--chakra-colors-waggle-gray-100)"
            fontSize={12}
          />
          {MOCK_DATA.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </DashboardItem>
        <DashboardItem flexDir="column">
          <Calendar />
          <Divider />
        </DashboardItem>
      </Flex>
    </GNBLayout>
  );
}
