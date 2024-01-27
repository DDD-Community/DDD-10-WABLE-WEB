import { Box, Flex, Spacer } from '@chakra-ui/react';

import WaggleWaggleLogo from '@/assets/images/waggle-waggle-logo.svg?url';
import HomeIcon from '@/assets/icons/home.svg?url';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export function Header() {
  return (
    <Flex w="100%" paddingX="32px" paddingTop="35px" alignItems="center">
      <Image {...WaggleWaggleLogo} alt="와글와글 로고" />
      <Spacer />
      프로필 상세 정보 입력
      <Spacer />
      <Flex w="234px">
        <Flex
          padding="12px 16px"
          alignItems="center"
          gap="12px"
          w="142px"
          h="54px"
          borderRadius="15px"
          backgroundColor="white"
          justifySelf="end"
          marginLeft="auto"
          boxShadow="0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02);"
        >
          <Box bg="black">
            <Image {...HomeIcon} alt="홈 아이콘" />
          </Box>
          <Link href={ROUTES.HOME}>홈으로 가기</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
