import { useState } from 'react';
import { HStack, Heading } from '@chakra-ui/react';
import { ProfileInfo, CardDirection, CardViewType } from './types';
import { ProfileCardSection, CardListSection } from './styles';
import GNBLayout from '@/layouts/gnb-layout';
import ProfileCard from '@/components/pages/my-card/profile-card/index';
import CardListHeader from './card-list/header';

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
  const [cardDirection, setCardDirection] = useState<CardDirection>('RECEIVED');
  const [viewType, setViewType] = useState<CardViewType>('LIST');

  function handleProfileCardClick(cardIndex: number) {
    setOpenedProfileIndex(cardIndex);
  }

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="27px">
        그룹1에 오신걸 환영합니다.
      </Heading>
      <HStack gap="16px" width="full" height="full" alignItems="flex-start">
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
        <CardListSection>
          <CardListHeader
            cardDirection={cardDirection}
            viewType={viewType}
            onChangeCardDirection={setCardDirection}
            onChangeViewType={setViewType}
          />
        </CardListSection>
      </HStack>
    </GNBLayout>
  );
}
