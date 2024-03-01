import { useEffect, useState } from 'react';
import { HStack, Heading } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { ProfileInfo } from '@/components/common/profile-info/types';
import { CardDirection, CardViewType, CardInfo, CardType } from './types';
import { ProfileCardSection, CardListSection, CardListFooter } from './styles';
import GNBLayout from '@/layouts/gnb-layout';
import ProfileCard from '@/components/pages/my-card/profile-card/index';
import CardListHeader from './card-list/header';
import CardListView from './card-list/view';
import NextPage from '@/assets/icons/next-page.svg';
import PrevPage from '@/assets/icons/prev-page.svg';
import { mockCardInfoForGrid, mockCardInfoForList, mockProfile } from './data';
import { useMyCardsQuery } from '@/hooks/queries/card/useMyCardsQuery';

export default function MyCard() {
  const profiles: ProfileInfo[] = mockProfile;
  const cardListForGrid: CardInfo[] = mockCardInfoForGrid;
  const cardListForList: CardInfo[] = mockCardInfoForList;

  const [openedProfileIndex, setOpenedProfileIndex] = useState(0);

  function handleProfileCardClick(cardIndex: number) {
    setOpenedProfileIndex(cardIndex);
  }

  // search
  const [cardDirection, setCardDirection] = useState<CardDirection>('RECEIVED');
  const [viewType, setViewType] = useState<CardViewType>('GRID');
  const [cardTypes, setCardTypes] = useState<CardType[]>([
    'CELEBRATION',
    'ENCOURAGEMENT',
    'GRATITUDE',
    'GREETING',
  ]);
  const [groupIds, setGroupIds] = useState<number[]>([]);

  const GRID_SIZE = 6;
  const LIST_SIZE = 14;
  const totalCardCount = 32;
  const [lastId, setLastId] = useState(0);
  const [size, setSize] = useState(GRID_SIZE);
  const [pageCount, setPageCount] = useState(Math.ceil(totalCardCount / size));
  const [page, setPage] = useState(0);
  function handlePageClick(selectedItem: { selected: number }) {
    setPage(selectedItem.selected);
  }

  useEffect(() => {
    const newSize = viewType === 'GRID' ? GRID_SIZE : LIST_SIZE;
    setSize(newSize);
  }, [viewType]);

  useEffect(() => {
    setPageCount(Math.ceil(totalCardCount / size));
  }, [size]);

  useEffect(() => {
    const newLastId = (page - 1) * size + 1;
    setLastId(newLastId);
  }, [page]);

  const { myCards } = useMyCardsQuery(
    cardDirection,
    groupIds,
    cardTypes,
    0,
    size,
  );

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
          <CardListFooter>
            <ReactPaginate
              breakLabel="..."
              nextLabel={<NextPage />}
              previousLabel={<PrevPage />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageClassName="pagination__page"
              pageLinkClassName="pagination__page-link"
              previousClassName="pagination__page"
              previousLinkClassName="pagination__page-link"
              nextClassName="pagination__page"
              nextLinkClassName="pagination__page-link"
              activeClassName="pagination__active"
            />
          </CardListFooter>
        </CardListSection>
      </HStack>
    </GNBLayout>
  );
}
