import styled from '@emotion/styled';

const ProfileCardSection = styled.section`
  width: 444px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 35px;
  flex: 1;
  height: 100%;
  background-color: var(--chakra-colors-waggle-gray-100);
  border-radius: 16px;
  padding: 12px 14px 0;
  overflow-y: auto;
`;

const CardListFooter = styled.footer`
  padding: 0 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination {
    display: flex;
    gap: 12px;
  }

  .pagination__page {
    width: 24px;
    height: 24px;
    padding: 0;
    border: 1px solid var(--chakra-colors-black);
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination__page-link {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }

  .pagination__active {
    background-color: var(--chakra-colors-black);
    color: white;
  }
`;

export { ProfileCardSection, CardListSection, CardListFooter };
