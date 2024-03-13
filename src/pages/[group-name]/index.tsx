import { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import GNBLayout from '@/layouts/gnb-layout';
import MemberListSection from '@/components/pages/member/member-list-section';
import DetailSection from '@/components/pages/member/detail-section';
import { ProfileInfo } from '@/components/common/profile-info/types';
import CardSendSection from '@/components/pages/member/card-send-section';

export default function Member() {
  const [step, setStep] = useState(0);
  const [selectedMember, setSelectedMember] = useState<ProfileInfo | null>();

  const handleMemberSelect = (member: ProfileInfo) => {
    setSelectedMember(member);
    setStep(1);
  };

  const handleClose = () => {
    setSelectedMember(null);
    setStep(0);
  };

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        팀원들에게 카드를 보내보세요!
      </Heading>
      <Flex height="full" gap="16px" w="full" overflowY="auto">
        <MemberListSection
          isSelected={!!selectedMember}
          onSelect={handleMemberSelect}
        />
        {selectedMember && (
          <>
            {step === 1 && (
              <DetailSection
                selectedMember={selectedMember}
                onClose={handleClose}
                onClickSend={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <CardSendSection
                selectedMember={selectedMember}
                onClose={handleClose}
                onClickCancel={() => setStep(1)}
              />
            )}
          </>
        )}
      </Flex>
    </GNBLayout>
  );
}
