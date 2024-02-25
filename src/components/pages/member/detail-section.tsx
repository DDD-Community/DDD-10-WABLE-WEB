import DashboardItem from '@/components/common/dashboard-item';
import { ProfileInfo } from '@/components/common/profile-info';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import SendIcon from '@/assets/icons/send.svg';
import { ProfileInfo as ProfileInfoType } from '@/components/common/profile-info/types';

export default function DetailSection({
  selectedMember,
  onClose,
  onClickSend,
}: {
  selectedMember: ProfileInfoType;
  onClose: () => void;
  onClickSend: () => void;
}) {
  return (
    <DashboardItem flexDir="column" grow={1} h="fit-content">
      <Flex gap={1} justify="space-between" align="center" mb="16px">
        <Heading fontSize="18px">프로필</Heading>
        <CloseIcon onClick={onClose} cursor="pointer" />
      </Flex>
      <Flex
        borderRadius="12px"
        bg="white"
        w="fit-content"
        padding="48px"
        mb="24px"
      >
        <ProfileInfo profile={selectedMember} />
      </Flex>
      <Button
        rightIcon={<SendIcon />}
        variant="primary"
        mb="8px"
        mx="auto"
        w="fit-content"
        onClick={onClickSend}
      >
        카드 보내기
      </Button>
    </DashboardItem>
  );
}
