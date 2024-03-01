import {
  ClosedProfile,
  OpenedProfile,
  ProfileSection,
  EditProfileButton,
} from './styles';
import { HStack, Text } from '@chakra-ui/react';
import { ProfileInfo } from '@/components/common/profile-info/index';
import { Props } from './types';
import PenIcon from '@/assets/icons/pen.svg';

export default function ProfileCard({ isOpened, profile, onClick }: Props) {
  return (
    <ProfileSection onClick={onClick}>
      {isOpened ? (
        <OpenedProfile>
          <HStack as="header" justifyContent="space-between">
            <Text fontSize="xs" as="b">
              {profile.group?.name || '기본'} 프로필
            </Text>
            <EditProfileButton>
              수정
              <PenIcon />
            </EditProfileButton>
          </HStack>
          <ProfileInfo profile={profile} />
        </OpenedProfile>
      ) : (
        <ClosedProfile>
          <Text as="b">{profile.group?.name || '기본'} 프로필</Text>
        </ClosedProfile>
      )}
    </ProfileSection>
  );
}
