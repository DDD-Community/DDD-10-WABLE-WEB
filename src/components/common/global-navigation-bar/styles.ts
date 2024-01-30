import styled from '@emotion/styled';

interface ItemWrapperProps {
  currentTab?: boolean;
}

const GNBContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  width: 282px;
  height: 100vh;
  padding: 1.5rem;

  background-color: var(--chakra-colors-black);
  border-radius: 0 30px 30px 0;
`;

const GNBHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
`;

const GNBBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const GNBFooter = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: flex-end;
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.5rem;
`;

const ItemGroupHeader = styled.h2`
  padding: 0.75rem;

  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  color: var(--chakra-colors-white);
`;

const ItemContainer = styled.div<ItemWrapperProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  padding: 0.75rem 1rem;

  font-size: 12px;
  font-weight: 700;
  line-height: 150%;

  border-radius: 1rem;

  ${({ currentTab }) =>
    currentTab
      ? `color: var(--chakra-colors-black); background-color: var(--chakra-colors-white);`
      : `color: var(--chakra-colors-waggle-gray-600); background-color: transparent;`};
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1 / 1;
    padding: 0.5rem;

    color: var(--chakra-colors-black);

    background-color: ${({ currentTab }) =>
      currentTab ? 'var(--chakra-colors-black)' : 'var(--chakra-colors-white)'};
    border-radius: 0.75rem;
  }

  & path {
    fill: ${({ currentTab }) =>
      currentTab ? 'var(--chakra-colors-white)' : 'var(--chakra-colors-black)'};
  }
`;

const Logout = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  padding: 0 0.5rem;

  font-size: 12px;
  font-weight: 700;
  color: var(--chakra-colors-white);

  :hover {
    cursor: pointer;
  }
`;

export {
  GNBContainer,
  GNBHeader,
  GNBBody,
  GNBFooter,
  ItemGroup,
  ItemGroupHeader,
  ItemContainer,
  Logout,
};
