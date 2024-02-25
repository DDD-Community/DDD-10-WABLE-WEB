import { useState } from 'react';
import { HStack, Heading } from '@chakra-ui/react';
import { ProfileInfo } from '@/components/common/profile-info/types';
import { CardDirection, CardViewType, CardInfo } from './types';
import { ProfileCardSection, CardListSection } from './styles';
import GNBLayout from '@/layouts/gnb-layout';
import ProfileCard from '@/components/pages/my-card/profile-card/index';
import CardListHeader from './card-list/header';
import CardListView from './card-list/view';
import CardListFooter from './card-list/footer';
import { mockCardInfoForGrid, mockCardInfoForList, mockProfile } from './data';

export default function MyCard() {
  const profiles: ProfileInfo[] = mockProfile;
  const cardListForGrid: CardInfo[] = mockCardInfoForGrid;
  const cardListForList: CardInfo[] = mockCardInfoForList;

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
      <HStack
        gap="16px"
        width="full"
        height="full"
        alignItems="flex-start"
        overflowY="auto"
      >
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
          <CardListView
            viewType={viewType}
            cardList={viewType === 'GRID' ? cardListForGrid : cardListForList}
          />
          <CardListFooter />
        </CardListSection>
      </HStack>
    </GNBLayout>
  );
}
