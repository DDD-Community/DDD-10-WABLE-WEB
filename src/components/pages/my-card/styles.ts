import styled from '@emotion/styled';

const ProfileCardSection = styled.section`
  width: 444px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardListSection = styled.section`
  flex: 1;
  min-width: 650px;
  height: 100%;
  background-color: var(--chakra-colors-waggle-gray-100);
  border-radius: 16px;
  padding: 12px 23px 32px;
`;

export { ProfileCardSection, CardListSection };
