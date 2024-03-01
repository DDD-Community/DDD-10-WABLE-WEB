import { VStack, HStack, Text, Divider } from '@chakra-ui/react';
import { ProfileInfoGrid } from './styles';
import Male from '@/assets/icons/male.svg';
import Female from '@/assets/icons/female.svg';
import { MyProfileResponseDto } from '@/api/profile/types';

export function ProfileInfo({ profile }: { profile: MyProfileResponseDto }) {
  return (
    <VStack as="main" gap="20px">
      <VStack gap="12px">
        <HStack gap="2px">
          <Text fontSize="xl" as="b">
            {profile.name}
          </Text>
          {profile?.gender &&
            (profile.gender === 'male' ? <Male /> : <Female />)}
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
        <HStack>
          {profile.hobby.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </HStack>
      </ProfileInfoGrid>
    </VStack>
  );
}
