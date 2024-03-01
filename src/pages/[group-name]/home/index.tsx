import { Flex, Heading } from '@chakra-ui/react';

import GNBLayout from '@/layouts/gnb-layout';
import Profile from '@/components/pages/home/profile';
import CardSection from '@/components/pages/home/card-section';
import BirthdaySection from '@/components/pages/home/birthday-section';
import { useCurrentGroup } from '@/hooks/common/useCurrentGroup';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        {router.query['group-name']}에 오신걸 환영합니다.
      </Heading>
      <Profile
        src="/images/my-face.jpeg"
        name="신승준"
        email="alohajune22@gmail.com"
      />
      <Flex height="full" gap="16px" w="full" overflowY="auto">
        <CardSection />
        <BirthdaySection />
      </Flex>
    </GNBLayout>
  );
}
