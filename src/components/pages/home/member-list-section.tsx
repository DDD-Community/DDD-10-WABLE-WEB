import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import DashboardItem from '@/components/common/dashboard-item';
import { ProfileCard } from '@/components/pages/home/profile-card';

export default function MemberListSection({
  isSelected,
  onSelect,
}: {
  isSelected: boolean;
  onSelect: (member: any) => void;
}) {
  const member = {
    name: '조성원',
    nickname: '원토리',
    gender: '남',
    birth: '2000-07-20',
    profile_image_url: 'https://avatars.githubusercontent.com/u/77449822?v=4',
    mbti: 'INTJ',
    hobby: ['종이접기', '피아노연주'],
  };

  return (
    <DashboardItem flexDir="column" overflow="auto" w="full" h="full">
      <Flex gap={1} align="end">
        <Heading fontSize="18px">팀원 목록</Heading>
        <Text color="waggle.gray.700" fontSize="11px" fontWeight="600">
          (총 n명)
        </Text>
      </Flex>
      <VStack mx="auto" w="fit-content" overflowY="auto" alignItems="end">
        <InputGroup backgroundColor="white" size="sm" w="200px" mb="32px">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="팀원 검색" />
        </InputGroup>
        <Grid
          templateColumns={isSelected ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)'}
          gap="16px"
          mx="auto"
          overflowY="scroll"
        >
          <GridItem w="170px" onClick={() => onSelect(member)} cursor="pointer">
            <ProfileCard member={member} />
          </GridItem>
        </Grid>
      </VStack>
    </DashboardItem>
  );
}
