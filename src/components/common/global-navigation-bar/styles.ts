import styled from '@emotion/styled';

interface ItemWrapperProps {
  currentTab?: boolean;
}

const GNBContainer = styled.div`
  top: 0;
  left: 0;
  padding: 1.5rem;
  border-radius: 0 30px 30px 0;
  width: 282px;
  height: 100vh;
  background-color: var(--chakra-colors-black);
`;

const ItemWrapper = styled.div<ItemWrapperProps>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
  border-radius: 1rem;
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  ${({ currentTab }) =>
    currentTab
      ? `
      color: var(--chakra-colors-black);
      background-color: white;`
      : `
      color: var(--chakra-colors-waggle-gray-600);
      background-color: transparent;
      `};

  & > div {
    aspect-ratio: 1 / 1;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
    background-color: ${({ currentTab }) =>
      currentTab ? 'var(--chakra-colors-black)' : '#ffffff'};
    color: var(--chakra-colors-black);
  }
`;

export { GNBContainer, ItemWrapper };
