import { useState } from 'react';
import { HStack, Heading } from '@chakra-ui/react';
import { ProfileInfo } from './types';
import { ProfileCardSection } from './styles';
import GNBLayout from '@/layouts/gnb-layout';
import ProfileCard from '@/components/pages/my-card/profile-card/index';

export default function MyCard() {
  const profiles: ProfileInfo[] = [
    {
      name: '박경서',
      nickname: '박경서_1',
      gender: 'male',
      birth: '1998-01-21',
      profile_image_url: '~~~',
      mbti: 'ENTP',
      hobby: ['???', '??', '?', '직접입력'],
    },
    {
      name: '김도경',
      nickname: '김도경_1',
      gender: 'female',
      birth: '1996-01-21',
      profile_image_url: '~~~',
      mbti: 'ENTP',
      hobby: ['???', '??', '?', '직접입력'],
    },
  ];

  const [openedProfileIndex, setOpenedProfileIndex] = useState(0);
  function handleProfileCardClick(cardIndex: number) {
    setOpenedProfileIndex(cardIndex);
  }

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        그룹1에 오신걸 환영합니다.
      </Heading>
      <HStack gap="16px" width="full">
        <ProfileCardSection>
          {profiles.map((profile, index) => (
            <ProfileCard
              profile={profile}
              isOpened={openedProfileIndex === index}
              key={index}
              onClick={() => handleProfileCardClick(index)}
            />
          ))}
        </ProfileCardSection>

        <section>hi</section>
      </HStack>
    </GNBLayout>
  );
}
