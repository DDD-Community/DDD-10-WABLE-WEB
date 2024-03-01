import { Flex, Heading } from '@chakra-ui/react';

import GNBLayout from '@/layouts/gnb-layout';
import Profile from '@/components/pages/home/profile';
import CardSection from '@/components/pages/home/card-section';
import BirthdaySection from '@/components/pages/home/birthday-section';
import { useCurrentGroup } from '@/hooks/common/useCurrentGroup';

export default function Home() {
  const cur = useCurrentGroup();

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        {cur?.name}에 오신걸 환영합니다.
      </Heading>
      <Profile
        src="https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NoEOsKXD5w0yt7BvBmmMmzPaBUYd8cPdngiFmcCsy9HcGNTEdsmEzYDjYhxQpjxQuS59kmhlPA1w4jqqMr4mBFsCBU8lukzrEuaictw8GMfrtEcFu34vpU4MhB-2iRh8mEC2ZF084ZY014Q~qoIx9GO-6Q9TRHeamBB9PuXncXfEDDMg5tloKfasLP7otc9VdKHcGoYTKm8fvwjfLqg7QLdJ2mPvgQGjM2Rsp7~GpcMBEUnmjjESOJ9wnnux2uSkTCCnLa--l06lAO3-n1p-~9R1SpYVnSr9nMAOzXD95JutarM3WbGK3vPn3waaIq5nQEzncHzwMj6LUEyW0Cil3g__"
        name="홍길동"
        email="esthera@simmmple.com"
      />
      <Flex height="full" gap="16px" w="full" overflowY="auto">
        <CardSection />
        <BirthdaySection />
      </Flex>
    </GNBLayout>
  );
}
