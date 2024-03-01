import GNBLayout from '@/layouts/gnb-layout';
import { Flex, Heading, Button, Text } from '@chakra-ui/react';
import Profile from '@/components/pages/home/profile';
import DashboardItem from '@/components/common/dashboard-item';
import { CreateGroupForm } from '@/components/pages/group/form';
import { ConfirmModal } from '@/components/pages/group/settings/modal';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routes';

export default function CreateGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <GNBLayout>
        <Flex
          w="100%"
          h="100%"
          gap="24px"
          px="24px"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Heading fontSize="24px">새로운 그룹을 만들어보세요!</Heading>
          <Flex
            w="100%"
            h="100%"
            gap="16px"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Profile
              src="/images/my-face.jpeg"
              name="신승준"
              email="alohajune22@gmail.com"
            />
            <DashboardItem h="full">
              <CreateGroupForm
                onSuccess={() => {
                  setIsOpen(true);
                }}
              />
            </DashboardItem>
          </Flex>
        </Flex>
      </GNBLayout>
      <ConfirmModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ConfirmModal.Header>그룹 생성 완료</ConfirmModal.Header>
        <ConfirmModal.Body>
          <Text>그룹이 완성되었습니다.</Text>
          <Text>그룹에서 사용할 프로필을 작성하세요!</Text>
        </ConfirmModal.Body>
        <ConfirmModal.Footer>
          <Button variant="tertiary">다음에 하기</Button>
          <Button
            variant="quaternary"
            onClick={() => {
              router.push(ROUTES.PROFILE.CREATE);
            }}
          >
            지금 만들기
          </Button>
        </ConfirmModal.Footer>
      </ConfirmModal>
    </>
  );
}
