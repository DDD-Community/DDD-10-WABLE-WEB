import styled from '@emotion/styled';

const ProfileSection = styled.section`
  background-color: var(--chakra-colors-waggle-gray-100);
  border-radius: 16px;
`;

const OpenedProfile = styled.section`
  padding: 20px;
`;

const ClosedProfile = styled.section`
  cursor: pointer;
  padding: 28px 20px;
  color: var(--chakra-colors-gray-500);
`;

const EditProfileButton = styled.button`
  display: flex;
  gap: 1px;
  align-items: center;
  padding: 5.5px 14px;
  font-size: 8px;
  font-weight: 600;
  color: var(--chakra-colors-waggle-gray-700);

  border: solid 1px #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 0 5px rgb(0 0 0 / 5%);
`;

const ProfileInfoGrid = styled.section`
  display: grid;
  gap: 18px 26px;
  grid-template-columns: 42px 1fr;
  grid-template-rows: 1fr 1fr;
  width: 300px;
`;

export {
  ProfileSection,
  OpenedProfile,
  ClosedProfile,
  EditProfileButton,
  ProfileInfoGrid,
};
