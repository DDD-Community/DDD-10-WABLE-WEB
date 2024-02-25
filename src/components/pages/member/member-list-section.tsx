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
import { ProfileCard } from '@/components/pages/member/profile-card';
import { mockProfile } from '../my-card/data';

export default function MemberListSection({
  isSelected,
  onSelect,
}: {
  isSelected: boolean;
  onSelect: (member: any) => void;
}) {
  return (
    <DashboardItem flexDir="column" overflow="auto" w="full" h="full">
      <Flex gap={1} align="end">
        <Heading fontSize="18px">팀원 목록</Heading>
        <Text color="waggle.gray.700" fontSize="11px" fontWeight="600">
          (총 {mockProfile.length}명)
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
          {mockProfile.map((member, i) => (
            <GridItem
              key={i}
              w="170px"
              onClick={() => onSelect(member)}
              cursor="pointer"
            >
              <ProfileCard member={member} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </DashboardItem>
  );
}
