import { Flex, Heading } from '@chakra-ui/react';

import GNBLayout from '@/layouts/gnb-layout';
import MemberListSection from '@/components/pages/member/member-list-section';

export default function Member() {
  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        팀원들에게 카드를 보내보세요!
      </Heading>
      <Flex height="full" gap="16px" w="full">
        <MemberListSection />
      </Flex>
    </GNBLayout>
  );
}
