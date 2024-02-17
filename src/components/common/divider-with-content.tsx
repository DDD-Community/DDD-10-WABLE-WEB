import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

export function DividerWithContent({
  content,
  bg = 'white',
  variant,
  fontSize,
}: {
  content: React.ReactNode;
  bg?: string;
  variant?: string;
  fontSize?: number;
}) {
  return (
    <Box position="relative" paddingY={3} width="full">
      <Divider variant={variant} />
      <AbsoluteCenter bg={bg} px={4} fontSize={fontSize}>
        {content}
      </AbsoluteCenter>
    </Box>
  );
}
