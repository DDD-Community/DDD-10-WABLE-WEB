import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

export function DividerWithContent({ content }: { content: React.ReactNode }) {
  return (
    <Box position="relative" paddingY={3} width="full">
      <Divider />
      <AbsoluteCenter bg="white" px={4}>
        {content}
      </AbsoluteCenter>
    </Box>
  );
}
