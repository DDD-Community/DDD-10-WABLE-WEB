import GNBLayout from '@/layouts/gnb-layout';
import { Flex, Heading, Button, Text, CloseButton } from '@chakra-ui/react';
import Profile from '@/components/pages/home/profile';
import DashboardItem from '@/components/common/dashboard-item';
import { EditGroupForm } from '@/components/pages/group/form';
import { ManageGroupMembers } from '@/components/pages/group/manage-group-members';
import { ConfirmModal } from '@/components/pages/group/settings/modal';

export default function GroupSetting() {
  function handleClickDeleteGroup() {}

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
          <Heading fontSize="24px">그룹 설정</Heading>
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
              right={
                <Button
                  px="33px"
                  py="6px"
                  w="134px"
                  h="35px"
                  border="none"
                  boxShadow="0px 2px 6px rgba(0, 0, 0, 0.06)"
                  onClick={handleClickDeleteGroup}
                >
                  <Text color="gray.700" fontSize="10px" lineHeight="150%">
                    그룹 삭제하기
                  </Text>
                </Button>
              }
            />
            <Flex w="full" h="full" gap="16px">
              <DashboardItem flex="1" h="full">
                <EditGroupForm />
              </DashboardItem>
              <DashboardItem flex="1.2">
                <ManageGroupMembers />
              </DashboardItem>
            </Flex>
          </Flex>
        </Flex>
      </GNBLayout>
      <ConfirmModal>
        <ConfirmModal.Header>
          <Text>팀원 삭제</Text>
        </ConfirmModal.Header>
        <ConfirmModal.Body>
          <Text>팀원을 그룹에서 삭제하시겠습니까?</Text>
        </ConfirmModal.Body>
        <ConfirmModal.Footer>
          <Button variant="tertiary">취소</Button>
          <Button variant="error">삭제</Button>
        </ConfirmModal.Footer>
      </ConfirmModal>
      <ConfirmModal>
        <ConfirmModal.Header>
          <Text>그룹 삭제</Text>
        </ConfirmModal.Header>
        <ConfirmModal.Body>
          <Text>
            그룹을 삭제하시겠습니까?
            <br />
            기존에 받았던 카드는 내 카드에 저장됩니다.
          </Text>
        </ConfirmModal.Body>
        <ConfirmModal.Footer>
          <Button variant="tertiary">취소</Button>
          <Button variant="error">삭제</Button>
        </ConfirmModal.Footer>
      </ConfirmModal>
    </>
  );
}
