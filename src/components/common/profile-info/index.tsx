import { VStack, HStack, Text, Divider } from '@chakra-ui/react';
import { ProfileInfoGrid } from './styles';
import { ProfileInfo } from './types';
import Male from '@/assets/icons/male.svg';
import Female from '@/assets/icons/female.svg';

export function ProfileInfo({ profile }: { profile: ProfileInfo }) {
  return (
    <VStack as="main" gap="20px">
      <VStack gap="12px">
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
        <Text color="waggle.gray.700">{profile.nickname}</Text>
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
