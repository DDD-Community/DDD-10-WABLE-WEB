import styled from '@emotion/styled';

const ProfileInfoGrid = styled.section`
  display: grid;
  gap: 18px 26px;
  grid-template-columns: 42px 1fr;
  grid-template-rows: 1fr 1fr;
  width: 300px;
`;

const HobbyBadge = styled.div`
  padding: 10px 13px;
  border: solid 1px var(--chakra-colors-gray-200);
  border-radius: 10px;
  color: var(--chakra-colors-waggle-gray-700);
  background-color: white;
  width: fit-content;
`;

export { ProfileInfoGrid, HobbyBadge };
