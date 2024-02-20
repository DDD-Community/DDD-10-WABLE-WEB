import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';

import DefaultProfileImage from '@/assets/images/default-profile-image.svg?url';

function ProfileCard({
  name,
  birthday,
  profileImage,
}: {
  name: string;
  birthday: string;
  profileImage?: string;
}) {
  return (
    <Card overflow="hidden" shadow="none">
      <Box backgroundColor="#A0AEC0" px="44px" pt="32px" pb="18px">
        <img src={DefaultProfileImage.src} />
      </Box>
      <CardBody px="16px" py="10px" minH="84px">
        <Heading size="sm" fontWeight="600">
          {name}
        </Heading>
        <Text fontSize="12px" color="waggle.gray.700">
          {birthday}
        </Text>
      </CardBody>
    </Card>
  );
}

export { ProfileCard };
