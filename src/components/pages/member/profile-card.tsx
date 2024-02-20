import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';

import DefaultProfileImage from '@/assets/images/default-profile-image.svg?url';

function ProfileCard() {
  return (
    <Card overflow="hidden" shadow="none">
      <Box backgroundColor="#A0AEC0" px="44px" pt="32px" pb="18px">
        <img src={DefaultProfileImage.src} />
      </Box>
      <CardBody px="16px" py="10px" minH="84px">
        <Heading size="sm" fontWeight="600">
          홍길동
        </Heading>
        <Text fontSize="12px" color="waggle.gray.700">
          1999.03.27
        </Text>
      </CardBody>
    </Card>
  );
}

export { ProfileCard };
