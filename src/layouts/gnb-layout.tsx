import { Flex, VStack } from '@chakra-ui/react';

import GlobalNavigationBar from '@/components/common/global-navigation-bar';

export default function GNBLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <GlobalNavigationBar />
      <VStack
        padding="1.5rem"
        gap="16px"
        maxHeight="100vh"
        align="start"
        flexGrow={1}
      >
        {children}
      </VStack>
    </Flex>
  );
}
