import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import DashboardItem from '@/components/common/dashboard-item';
import ProfileIconUrl from '@/assets/icons/profile.svg?url';

export default function Profile({
  src,
  name,
  email,
  right,
}: {
  src?: string;
  name: string;
  email: string;
  right?: React.ReactNode;
}) {
  return (
    <DashboardItem align="center" justify="space-between" width="full">
      <Flex align="center">
        <Box width="80px" height="80px" position={'relative'}>
          <Image
            src={src ?? ProfileIconUrl.src}
            alt="profile"
            fill
            style={{ objectFit: 'cover', borderRadius: '16px' }}
          />
        </Box>
        <Box ml="20px">
          <Heading fontSize="18px">{name}</Heading>
          <Text fontSize="14px" color="waggle.gray.700">
            {email}
          </Text>
        </Box>
      </Flex>
      {right && right}
    </DashboardItem>
  );
}
