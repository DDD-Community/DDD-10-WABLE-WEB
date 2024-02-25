import { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import GNBLayout from '@/layouts/gnb-layout';
import MemberListSection from '@/components/pages/member/member-list-section';
import DetailSection from '@/components/pages/member/detail-section';
import { ProfileInfo } from '@/components/common/profile-info/types';

export default function Member() {
  const [selectedMember, setSelectedMember] = useState<ProfileInfo | null>();

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        팀원들에게 카드를 보내보세요!
      </Heading>
      <Flex height="full" gap="16px" w="full" overflowY="auto">
        <MemberListSection
          isSelected={!!selectedMember}
          onSelect={setSelectedMember}
        />
        {selectedMember && (
          <DetailSection
            selectedMember={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </Flex>
    </GNBLayout>
  );
}
