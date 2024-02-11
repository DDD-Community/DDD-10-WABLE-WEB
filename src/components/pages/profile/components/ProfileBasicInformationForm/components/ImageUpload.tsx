import { Box, Flex } from '@chakra-ui/react';

import EditIcon from '@/assets/icons/edit.svg';

export function ImageUpload() {
  return (
    <Flex
      maxW="412px"
      w="100%"
      h="168px"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="relative" borderRadius="12px" w="168px" h="168px">
        {/* file input */}
        <Flex
          justifyContent="center"
          alignItems="center"
          position="absolute"
          borderRadius="8px"
          bottom="-10px"
          right="-10px"
          w="54px"
          h="54px"
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.06)"
        >
          <EditIcon />
        </Flex>
      </Box>
    </Flex>
  );
}
