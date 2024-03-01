import GNBLayout from '@/layouts/gnb-layout';
import { Flex, Heading } from '@chakra-ui/react';
import Profile from '@/components/pages/home/profile';
import DashboardItem from '@/components/common/dashboard-item';
import { CreateGroupForm } from '@/components/pages/group/form';

export default function CreateGroup() {
  return (
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
            <CreateGroupForm />
          </DashboardItem>
        </Flex>
      </Flex>
    </GNBLayout>
  );
}
