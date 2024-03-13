import Image from 'next/image';
import { formatDate } from 'date-fns';
import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';

import DefaultProfileImage from '@/assets/images/default-profile-image.svg?url';
import { ProfileInfo } from '@/components/common/profile-info/types';

function ProfileCard({ member }: { member: ProfileInfo }) {
  return (
    <Card overflow="hidden" shadow="none">
      <Box backgroundColor="#A0AEC0" px="44px" pt="32px" pb="18px">
        <Image
          src={DefaultProfileImage.src as string}
          alt="profile image"
          fill
        />
      </Box>
      <CardBody px="16px" py="10px" minH="84px">
        <Heading size="sm" fontWeight="600">
          {member.name}
        </Heading>
        <Text fontSize="12px" color="waggle.gray.700">
          {formatDate(member.birth, 'yyyy.MM.dd')}
        </Text>
      </CardBody>
    </Card>
  );
}

export { ProfileCard };
