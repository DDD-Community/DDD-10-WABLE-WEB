import { Box, Flex } from '@chakra-ui/react';

import GlobalNavigationBar from '@/components/common/global-navigation-bar';

export default function GNBLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <GlobalNavigationBar />
      <Box padding="1.5rem">{children}</Box>
    </Flex>
  );
}
