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

export { ProfileCardSection, CardListSection };
