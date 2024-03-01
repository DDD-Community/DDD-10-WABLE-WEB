import Image from 'next/image';
import { VStack, HStack, Text, Divider, Box } from '@chakra-ui/react';
import { ProfileInfoGrid, HobbyBadge } from './styles';
import Male from '@/assets/icons/male.svg';
import Female from '@/assets/icons/female.svg';
import { MyProfileResponseDto } from '@/api/profile/types';
import { Profile } from './types';
import profileImage from '@/assets/images/mock/seungjun.jpeg';

export function ProfileInfo({ profile }: { profile: Profile }) {
  return (
    <VStack as="main" gap="20px">
      <VStack gap="12px">
        <Box borderRadius="8px">
          <Image
            src={profileImage.src}
            width="111"
            height="111"
            alt={profile.nickName}
          />
        </Box>
        <HStack gap="2px">
          <Text fontSize="xl" as="b">
            {profile.name}
          </Text>
          {profile?.gender &&
            (profile.gender === '남성' ? <Male /> : <Female />)}
        </HStack>
      </VStack>
      <Divider />
      <ProfileInfoGrid>
        <Text>닉네임</Text>
        <Text color="waggle.gray.700">{profile.nickName}</Text>
        <Text>생일</Text>
        <Text color="waggle.gray.700">{profile.birth}</Text>
        <Text>MBTI</Text>
        <Text color="waggle.gray.700">{profile.mbti}</Text>
        <Text>관심사</Text>
        <HStack gap="7px" flexWrap="wrap">
          {profile.hobby.map((item) => (
            <HobbyBadge key={item}>{item}</HobbyBadge>
          ))}
        </HStack>
      </ProfileInfoGrid>
    </VStack>
  );
}
