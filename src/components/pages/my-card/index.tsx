import { useEffect, useState } from 'react';
import { HStack, Heading } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { ProfileInfo } from '@/components/common/profile-info/types';
import { CardType } from '@/api/card/types';
import { CardDirection, CardViewType, CardInfo } from './types';
import { ProfileCardSection, CardListSection, CardListFooter } from './styles';
import GNBLayout from '@/layouts/gnb-layout';
import ProfileCard from '@/components/pages/my-card/profile-card/index';
import CardListHeader from './card-list/header';
import CardListView from './card-list/view';
import NextPage from '@/assets/icons/next-page.svg';
import PrevPage from '@/assets/icons/prev-page.svg';
import { mockCardInfoForGrid, mockCardInfoForList, mockProfile } from './data';
import { useMyCardsQuery } from '@/hooks/queries/card/useMyCardsQuery';
import { CardModal } from './card-modal';
import { useMyProfilesQuery } from '@/hooks/queries/profile/useMyProfilesQuery';

export default function MyCard() {
  const profiles: ProfileInfo[] = mockProfile;
  const mockCardList: CardInfo[] = mockCardInfoForGrid;
  const [cardList, setCardList] = useState([]);

  // const { data: profiles } = useMyProfilesQuery();

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
  const [lastId, setLastId] = useState(0);
  const [size, setSize] = useState(GRID_SIZE);
  const [pageCount, setPageCount] = useState(
    Math.ceil(mockCardList.length / size),
  );
  const [page, setPage] = useState(0);
  function handlePageClick(selectedItem: { selected: number }) {
    setPage(selectedItem.selected);
  }

  useEffect(() => {
    const newSize = viewType === 'GRID' ? GRID_SIZE : LIST_SIZE;
    setSize(newSize);
  }, [viewType]);

  useEffect(() => {
    setPageCount(Math.ceil(mockCardList.length / size));
  }, [size]);

  useEffect(() => {
    const newLastId = page * size;
    const newCardData = mockCardList.slice(newLastId, newLastId + size);
    setLastId(newLastId);
    setCardList([...newCardData]);
  }, [page, size]);

  const { data: myCards } = useMyCardsQuery(
    cardDirection,
    groupIds,
    cardTypes,
    lastId,
    size,
  );

  const [openedCard, setOpenedCard] = useState<CardInfo | null>(null);
  function handleCardClose() {
    setOpenedCard(null);
  }
  function handleCardOpen(card: CardInfo) {
    setOpenedCard(card);
  }

  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="27px">
        내 카드
      </Heading>
      <HStack
        gap="16px"
        width="full"
        height="full"
        alignItems="flex-start"
        overflowY="auto"
      >
        <ProfileCardSection>
          {profiles &&
            profiles.map((profile, index) => (
              <ProfileCard
                profile={profile}
                isOpened={openedProfileIndex === index}
                key={index}
                onClick={() => handleProfileCardClick(index)}
              />
            ))}
        </ProfileCardSection>
        <CardListSection>
          {openedCard === null ? (
            <>
              <CardListHeader
                cardDirection={cardDirection}
                viewType={viewType}
                onChangeCardDirection={setCardDirection}
                onChangeViewType={setViewType}
              />
              <CardListView
                viewType={viewType}
                cardList={cardList}
                onClickCard={handleCardOpen}
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
            </>
          ) : (
            <CardModal onCardClose={handleCardClose} card={openedCard} />
          )}
        </CardListSection>
      </HStack>
    </GNBLayout>
  );
}
