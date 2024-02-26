import GNBLayout from '@/layouts/gnb-layout';
import { Flex, Heading, Button, Text } from '@chakra-ui/react';
import Profile from '@/components/pages/home/profile';
import DashboardItem from '@/components/common/dashboard-item';
import { EditGroupForm } from '@/components/pages/group/form';
import { ManageGroupMembers } from '@/components/pages/group/manage-group-members';
import {
  GroupDeleteModal,
  MemberDeleteModal,
} from '@/components/pages/group/settings/modal';

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
              src="https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NoEOsKXD5w0yt7BvBmmMmzPaBUYd8cPdngiFmcCsy9HcGNTEdsmEzYDjYhxQpjxQuS59kmhlPA1w4jqqMr4mBFsCBU8lukzrEuaictw8GMfrtEcFu34vpU4MhB-2iRh8mEC2ZF084ZY014Q~qoIx9GO-6Q9TRHeamBB9PuXncXfEDDMg5tloKfasLP7otc9VdKHcGoYTKm8fvwjfLqg7QLdJ2mPvgQGjM2Rsp7~GpcMBEUnmjjESOJ9wnnux2uSkTCCnLa--l06lAO3-n1p-~9R1SpYVnSr9nMAOzXD95JutarM3WbGK3vPn3waaIq5nQEzncHzwMj6LUEyW0Cil3g__"
              name="홍길동"
              email="esthera@simmmple.com"
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
      <MemberDeleteModal />
      <GroupDeleteModal />
    </>
  );
}
