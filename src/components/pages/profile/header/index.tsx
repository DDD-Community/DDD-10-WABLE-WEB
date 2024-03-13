import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import WaggleWaggleLogo from '@/assets/images/waggle-waggle-logo.svg';
import HomeIcon from '@/assets/icons/home.svg';
import { ROUTES } from '@/constants/routes';

export function Header() {
  return (
    <Flex
      w="100%"
      padding="24px"
      paddingBottom="0px"
      alignItems="center"
      justifyContent="space-between"
    >
      <WaggleWaggleLogo />
      <Link href={ROUTES.HOME}>
        <Flex>
          <Flex
            padding="12px 16px"
            alignItems="center"
            gap="12px"
            w="142px"
            h="54px"
            borderRadius="15px"
            bg="white"
            justifySelf="end"
            marginLeft="auto"
            boxShadow="0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02);"
          >
            <Box padding="8px" bg="black" borderRadius="12px">
              <HomeIcon />
            </Box>
            <Heading size="xs">홈으로 가기</Heading>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
