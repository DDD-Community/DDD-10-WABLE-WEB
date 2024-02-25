import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import DashboardItem from '@/components/common/dashboard-item';
import { ProfileCard } from '@/components/pages/member/profile-card';

const MOCK_MEMBERS = [
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
  { name: '홍길동', birthday: '1999.03.27' },
];

export default function MemberListSection() {
  const n = 10;

  return (
    <DashboardItem flexDir="column" overflow="auto" w="full" h="full">
      <Flex gap={1} align="end">
        <Heading fontSize="18px">팀원 목록</Heading>
        <Text color="waggle.gray.700" fontSize="11px" fontWeight="600">
          (총 {n}명)
        </Text>
      </Flex>
      <InputGroup
        backgroundColor="white"
        size="sm"
        w="200px"
        ml="auto"
        mb="32px"
      >
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="팀원 검색" />
      </InputGroup>
      <Grid templateColumns="repeat(5, 1fr)" gap="16px" mx="auto">
        {MOCK_MEMBERS.map((member, i) => (
          <GridItem key={i} w="170px">
            <ProfileCard {...member} />
          </GridItem>
        ))}
      </Grid>
    </DashboardItem>
  );
}
