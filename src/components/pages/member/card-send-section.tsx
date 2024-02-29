import DashboardItem from '@/components/common/dashboard-item';
import { ProfileInfo } from '@/components/common/profile-info';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  useRadioGroup,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import SendIcon from '@/assets/icons/send.svg';
import { ProfileInfo as ProfileInfoType } from '@/components/common/profile-info/types';
import RadioButton from './radio-button';
import ProfileImageUrl from '@/assets/icons/profile.svg?url';

const cardType = {
  GREETING: '인사',
  CELEBRATION: '축하',
  ENCOURAGEMENT: '응원',
  GRATITUDE: '감사',
};

export default function CardSendSection({
  selectedMember,
  onClose,
  onClickCancel,
}: {
  selectedMember: ProfileInfoType;
  onClose: () => void;
  onClickCancel: () => void;
}) {
  const options = ['GREETING', 'CELEBRATION', 'ENCOURAGEMENT', 'GRATITUDE'];

  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'card-type',
    defaultValue: 'GREETING',
  });

  const group = getRootProps();

  return (
    <DashboardItem flexDir="column" grow={1} h="full">
      <Flex gap={1} justify="end" align="center" mb="16px">
        <CloseIcon onClick={onClose} cursor="pointer" />
      </Flex>
      <Flex align="center" flexDir="column" gap="16px">
        <Avatar
          width="58px"
          height="58px"
          src={
            selectedMember.profile_image_url ?? (ProfileImageUrl.src as string)
          }
        />
        <Heading fontSize="18px">
          {selectedMember.name}님에게 카드 보내기
        </Heading>
      </Flex>
      <Flex gap={10} my="38px" mx="auto" {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioButton key={value} {...radio}>
              {cardType[value as keyof typeof cardType]}
            </RadioButton>
          );
        })}
      </Flex>
      <Flex
        mb="38px"
        w="456px"
        h="526px"
        bg="white"
        align="center"
        justify="center"
        borderRadius="16px"
      >
        {value}
      </Flex>
      <Flex gap="40px" justify="center">
        <Button
          variant="outline"
          bg="white"
          colorScheme="primary"
          mb="8px"
          onClick={onClickCancel}
        >
          취소
        </Button>
        <Button variant="primary" mb="8px">
          전송
        </Button>
      </Flex>
    </DashboardItem>
  );
}
