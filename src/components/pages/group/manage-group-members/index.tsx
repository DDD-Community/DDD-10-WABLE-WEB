import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

const MOCK_MEMBERS = [
  {
    name: '김도경',
    role: '관리자',
    imageSrc: '/images/000101.png',
  },
  {
    name: '신승준',
    role: '팀원',
    imageSrc: '/images/002501.png',
  },
  {
    name: '조성원',
    role: '팀원',
    imageSrc: '/images/009501.png',
  },
  {
    name: '조서현',
    role: '팀원',
    imageSrc: '/images/003901.png',
  },
  {
    name: '한나리',
    role: '팀원',
    imageSrc: '/images/005401.png',
  },
  {
    name: '박경서',
    role: '팀원',
    imageSrc: '/images/015001.png',
  },
  {
    name: '신민수',
    role: '팀원',
    imageSrc: '/images/014301.png',
  },
  {
    name: '최사라',
    role: '팀원',
    imageSrc: '/images/013201.png',
  },
  {
    name: '김율아',
    role: '팀원',
    imageSrc: '/images/014301.png',
  },
];

export function ManageGroupMembers() {
  return (
    <Flex
      flexDirection="column"
      align="flex-start"
      w="full"
      h="full"
      gap="32px"
    >
      <Flex w="full" justifyContent="space-between">
        <Flex gap="4px" align="flex-end">
          <Text fontSize="18px" fontWeight="bold" color="waggle.gray.900">
            팀원 관리
          </Text>
          <Text fontSize="11px" fontWeight="600" color="waggle.gray.700">
            (총 00명)
          </Text>
        </Flex>
        <InputGroup w="fit-content">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input w="200px" backgroundColor="white" placeholder="팀원 검색" />
        </InputGroup>
      </Flex>
      <Flex w="full" flexDirection="column">
        <Flex
          w="full"
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="gray.200"
          paddingBottom="12px"
        >
          <Text
            flex="3.5"
            paddingLeft="10px"
            fontSize="10px"
            lineHeight="150%"
            fontWeight="bold"
            color="gray.400"
          >
            이름
          </Text>
          <Text
            flex="1"
            fontSize="10px"
            lineHeight="150%"
            fontWeight="bold"
            color="gray.400"
          >
            역할
          </Text>
        </Flex>
        {MOCK_MEMBERS.map(({ name, role, imageSrc }) => (
          <Flex key={name} borderBottom="1px" borderColor="gray.200">
            <Flex
              h="56px"
              align="center"
              paddingLeft="10px"
              gap="16px"
              flex="3.5"
            >
              <Flex
                align="center"
                justify="center"
                borderRadius="12px"
                bg="gray.400"
                w="42px"
                h="40px"
              >
                <Image
                  width={24}
                  height={36}
                  src={imageSrc}
                  alt="와글이 기본 이미지"
                />
              </Flex>
              <Text
                fontSize="14px"
                fontWeight="600"
                lineHeight="140%"
                color="gray.700"
              >
                {name}
              </Text>
            </Flex>
            <Flex flex="1" align="center" gap="4px" cursor="pointer">
              <Text fontSize="14px" lineHeight="140%">
                {role}
              </Text>
              <ChevronDownIcon />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
