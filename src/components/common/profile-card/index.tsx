import {
  ClosedProfile,
  OpenedProfile,
  ProfileSection,
  EditProfileButton,
  ProfileInfoGrid,
} from './styles';
import { Props } from './types';
import { Divider, HStack, Text, VStack } from '@chakra-ui/react';
import PenIcon from '@/assets/icons/pen.svg';
import Male from '@/assets/icons/male.svg';
import Female from '@/assets/icons/female.svg';

export default function ProfileCard({ isOpened, profile, onClick }: Props) {
  return (
    <ProfileSection onClick={onClick}>
      {isOpened ? (
        <OpenedProfile>
          <HStack as="header" justifyContent="space-between">
            <Text fontSize="xs" as="b">
              기본 프로필
            </Text>
            <EditProfileButton>
              수정
              <PenIcon />
            </EditProfileButton>
          </HStack>
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
        </OpenedProfile>
      ) : (
        <ClosedProfile>
          <Text as="b">그룹 프로필</Text>
        </ClosedProfile>
      )}
    </ProfileSection>
  );
}
